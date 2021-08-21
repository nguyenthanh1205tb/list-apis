import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useSelector } from 'src/store'
import { Router } from 'src/types'

interface PrivateRouteProps extends Router {}
function PrivateRoute({ component: Component, auth, ...props }: PrivateRouteProps) {
  const { userInfo } = useSelector(state => state.UserReducer)
  if (!Component) return null
  return (
    <Route
      {...props}
      render={props => {
        if (!userInfo) {
          return <Redirect to="/login" />
        }
        return <Component {...props} />
      }}
    />
  )
}

export default React.memo(PrivateRoute)
