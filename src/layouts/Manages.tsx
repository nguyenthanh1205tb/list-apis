import React, { PropsWithChildren } from 'react'
interface ManagesLayoutProps {}

function ManagesLayout({ children }: PropsWithChildren<ManagesLayoutProps>) {
  return (
    <div>
      <h1>Manages layout</h1>
      {children}
    </div>
  )
}
export default React.memo(ManagesLayout)
