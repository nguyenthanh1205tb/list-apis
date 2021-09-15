import React, { Fragment, PropsWithChildren } from 'react'

interface PublicAuthProps {}

function PublicAuth({ children }: PropsWithChildren<PublicAuthProps>) {
  return <Fragment>{children}</Fragment>
}

export default React.memo(PublicAuth)
