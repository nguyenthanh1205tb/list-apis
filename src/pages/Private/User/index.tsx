import { Button } from '@blueprintjs/core'
import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router'

interface UserPageProps extends RouteComponentProps {}

function UserPage({ history }: PropsWithChildren<UserPageProps>) {
  return (
    <div>
      <h1>User Page</h1>
      <Button text="Go to Dashboard" onClick={() => history.push('/admin')} />
    </div>
  )
}

export default React.memo(UserPage)
