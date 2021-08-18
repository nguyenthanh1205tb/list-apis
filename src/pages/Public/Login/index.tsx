import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'
import { FlexContainer } from 'src/styled/Container'
import LoginForm from './components/LoginForm'

interface LoginPageProps extends RouteComponentProps {}

function LoginPage(props: PropsWithChildren<LoginPageProps>) {

  return (
    <FlexContainer center heightScreen>
      <FlexContainer center vertical>
        <h1>Login Page</h1>
        <LoginForm {...props} />
      </FlexContainer>
    </FlexContainer>
  )
}

export default React.memo(LoginPage)
