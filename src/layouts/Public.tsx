import React, { PropsWithChildren } from 'react'
import { RouteComponentProps } from 'react-router-dom'

interface PublicLayoutProps extends RouteComponentProps {}

function PublicLayout({ children }: PropsWithChildren<PublicLayoutProps>) {
  return (
    <div>
      <h1>PUBLIC LAYOUT</h1>
      {children}
    </div>
  )
}

export default React.memo(PublicLayout)
