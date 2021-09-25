import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'

interface LoginFormProps extends RouteComponentProps {
  login: (email: string, pwd: string) => void
}

function LoginForm({}: PropsWithChildren<LoginFormProps>) {
  return <div>LOGIN PAGE</div>
}

export default React.memo(LoginForm)
