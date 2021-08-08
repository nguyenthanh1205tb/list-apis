import { ReactNode } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import NotFound from 'src/components/Exceptions/404'
import { Router } from 'src/types/Root'
import RenderRoute from 'src/components/Auth/index'

function ChildRoute(route: Router): ReactNode {
  return (
    <Switch>
      {route.children && route.children.length && (
        <Redirect
          path={route.path}
          exact
          to={{
            pathname: route.children[0].path,
          }}
        />
      )}
      {RenderRoute(route.children)}
      <Route component={NotFound} />
    </Switch>
  )
}

export default ChildRoute
