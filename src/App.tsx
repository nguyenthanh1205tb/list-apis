import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RenderRoute from 'src/components/Auth'
import Routes from 'src/router'
import NotFound from 'src/components/Exceptions/404'

function App() {
  return (
    <Switch>
      {RenderRoute(Routes)}
      <Route component={NotFound} />
    </Switch>
  )
}

export default React.memo(App)
