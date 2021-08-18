import React, { PropsWithChildren, Fragment } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface PublicLayoutProps extends RouteComponentProps {}

function PublicLayout({ children }: PropsWithChildren<PublicLayoutProps>) {
  return <Fragment>{children}</Fragment>
}

export default React.memo(PublicLayout)
