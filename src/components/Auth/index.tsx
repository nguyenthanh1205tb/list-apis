import React, { ReactNode, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { Router } from 'src/types/Root'
import RenderChildRoute from 'src/components/Auth/ChildRoute'
import PrivateRoute from 'src/components/Auth/PrivateRoute'
import PublicRoute from 'src/components/Auth/PublicRoute'

function AuthRoute(routes?: Router[]): ReactNode {
  if (routes && routes.length) {
    return routes.map(({ component: Component, children, ...r }, index) => {
      if (children && children.length) {
        return (
          <Route
            {...r}
            key={index}
            render={props =>
              Component ? (
                <Component {...props}>
                  <Suspense fallback="loading...">{RenderChildRoute({ ...r, children })}</Suspense>
                </Component>
              ) : (
                <Suspense fallback="loading...">{RenderChildRoute({ ...r, children })}</Suspense>
              )
            }
          />
        )
      } else {
        if (r.auth) {
          return <PrivateRoute {...r} key={index} component={Component} />
        } else {
          return <PublicRoute {...r} key={index} component={Component} />
        }
      }
    })
  }
  return null
}

export default AuthRoute
