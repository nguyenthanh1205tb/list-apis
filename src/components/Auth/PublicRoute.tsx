import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Router } from 'src/types'

interface PublicRouteProps extends Router {}

function PublicRoute({ component: Component, auth, ...rest }: PublicRouteProps) {
  if (!Component) return null
  return (
    <Route
      {...rest}
      render={props => {
        const currentUser = false
        if (currentUser) {
          return <Redirect to={{ pathname: '/admin/dashboard' }} />
        }
        return <Component {...props} />
      }}
    />
  )
}

export default React.memo(PublicRoute)
