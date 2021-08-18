import { Button } from '@blueprintjs/core'
import React, { PropsWithChildren, Fragment } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface PrivateLayoutProps extends RouteComponentProps {}

function PrivateLayout({ children, history }: PropsWithChildren<PrivateLayoutProps>) {
  return (
    <Fragment>
      <h1>PRIVATE LAYOUT</h1>
      <Button text="Back to login page" onClick={() => history.push('/')} />
      {children}
    </Fragment>
  )
}

export default React.memo(PrivateLayout)
