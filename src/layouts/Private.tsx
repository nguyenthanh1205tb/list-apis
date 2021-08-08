import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface PrivateLayoutProps extends RouteComponentProps {}

function PrivateLayout({ children }: PropsWithChildren<PrivateLayoutProps>) {
  return (
    <div>
      <h1>PRIVATE LAYOUT</h1>
      {children}
    </div>
  )
}

export default React.memo(PrivateLayout)
