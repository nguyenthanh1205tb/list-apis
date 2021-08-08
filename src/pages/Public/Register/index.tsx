import { AnchorButton } from '@blueprintjs/core'
import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface RegisterPageProps extends RouteComponentProps {}

function RegisterPage({ history }: PropsWithChildren<RegisterPageProps>) {
  return (
    <div>
      <h1>Register page</h1>
      <AnchorButton text="Go to login" onClick={() => history.push('/login')} />
    </div>
  )
}

export default React.memo(RegisterPage)
