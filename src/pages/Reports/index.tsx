import React, { PropsWithChildren } from 'react'

interface ReportsProps {}

function Reports({}: PropsWithChildren<ReportsProps>) {
  return (
    <div>
      <h1>Reports page</h1>
    </div>
  )
}

export default React.memo(Reports)
