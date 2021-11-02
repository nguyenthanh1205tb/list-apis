import React, { PropsWithChildren, Fragment } from 'react'

interface PublicLayoutProps {}

function PublicLayout({ children }: PropsWithChildren<PublicLayoutProps>) {
  return <Fragment>{children}</Fragment>
}

export default PublicLayout
