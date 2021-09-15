import React, { Fragment, PropsWithChildren } from 'react'

interface PrivateAuthProps {}
function PrivateRoute({ children }: PropsWithChildren<PrivateAuthProps>) {
  return <Fragment>{children}</Fragment>
}

export default React.memo(PrivateRoute)
