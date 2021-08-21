import React, { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from 'react-router'
import { AppToaster } from 'src/helpers/toaster'
import { Auth } from 'src/hooks/useFirebase'
import useUser from 'src/hooks/useUser'
import { FlexContainer } from 'src/styled/Container'
import LoginForm from './components/LoginForm'

interface LoginPageProps extends RouteComponentProps {}

function LoginPage(props: PropsWithChildren<LoginPageProps>) {
  const { history } = props
  const { set: setUser } = useUser()
  const [t] = useTranslation()
  const loginWithEmailAndPassword = async (email: string, pwd: string) => {
    try {
      const result = await Auth().signInWithEmailAndPassword(email, pwd)
      if (result.user) {
        setUser(result)
        history.push('/admin')
      }
    } catch (err) {
      console.log(err)
      AppToaster.show({ message: t('login-fail'), intent: 'danger' })
    }
  }

  return (
    <FlexContainer center heightScreen>
      <FlexContainer center vertical>
        <h1>Login Page</h1>
        <LoginForm {...props} login={loginWithEmailAndPassword} />
      </FlexContainer>
    </FlexContainer>
  )
}

export default React.memo(LoginPage)
