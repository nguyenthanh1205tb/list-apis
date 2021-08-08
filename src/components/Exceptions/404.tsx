import React, { PropsWithChildren } from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

interface NotFoundProps extends RouteComponentProps {}

function NotFound({}: PropsWithChildren<NotFoundProps>) {
  return (
    <div>
      <h1>not found, please go back!</h1>
      <Link to={{ pathname: '/index.overkill' }}>Exit</Link>
    </div>
  )
}

export default React.memo(NotFound)
