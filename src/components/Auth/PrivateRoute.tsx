import React from 'react'
import { Route } from 'react-router-dom'
import PermissionDenied from 'src/components/Exceptions/403'
import { useSelector } from 'src/store'
import { Router } from 'src/types/Root'

interface PrivateRouteProps extends Router {}
function PrivateRoute({ component: Component, auth, ...props }: PrivateRouteProps) {
  const { userInfo } = useSelector(state => state.AppReducer)
  if (!Component) return null
  return (
    <Route
      {...props}
      render={props => {
        if (!userInfo) {
          return <PermissionDenied />
        }
        return <Component {...props} />
      }}
    />
  )
}

export default React.memo(PrivateRoute)
