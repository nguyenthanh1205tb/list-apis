import React, { Fragment, PropsWithChildren } from 'react'

interface PrivateLayoutProps {}

function PrivateLayout({ children }: PropsWithChildren<PrivateLayoutProps>) {
  return (
    <Fragment>
      <h1>PRIVATE LAYOUT</h1>
      {children}
    </Fragment>
  )
}

export default PrivateLayout
