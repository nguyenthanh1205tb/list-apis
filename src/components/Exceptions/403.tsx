import React, { PropsWithChildren } from 'react'

interface PermissionDeniedProps {}

function PermissionDenied({}: PropsWithChildren<PermissionDeniedProps>) {
  return <div>You can not access!</div>
}

export default React.memo(PermissionDenied)
