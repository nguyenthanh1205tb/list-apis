import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface RegisterPageProps extends RouteComponentProps {}

function RegisterPage({ history }: PropsWithChildren<RegisterPageProps>) {
  return (
    <div>
      <h1>Register page</h1>
    </div>
  )
}

export default React.memo(RegisterPage)
