import React, { Fragment, PropsWithChildren } from 'react'

function PrivateLayout({ children }: PropsWithChildren<unknown>) {
  return (
    <Fragment>
      <h1>PRIVATE LAYOUT</h1>
      {children}
    </Fragment>
  )
}

export default PrivateLayout
