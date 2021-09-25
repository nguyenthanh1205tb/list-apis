import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'
import { Auth } from 'src/hooks/useFirebase'
import useUser from 'src/hooks/useUser'
import LoginForm from '../../components/SignIn/LoginForm'

type LoginPageProps = RouteComponentProps

function LoginPage(props: PropsWithChildren<LoginPageProps>) {
  const { history } = props
  const { set: setUser } = useUser()
  const loginWithEmailAndPassword = async (email: string, pwd: string) => {
    try {
      const result = await Auth().signInWithEmailAndPassword(email, pwd)
      if (result.user) {
        setUser(result)
        history.push('/a')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="rt-flex rt-justify-center">
      <div>
        <h1>Login Page</h1>
        <LoginForm {...props} login={loginWithEmailAndPassword} />
      </div>
    </div>
  )
}

export default React.memo(LoginPage)
