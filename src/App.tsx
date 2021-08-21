import React from 'react'
import { Route, Switch } from 'react-router-dom'
import RenderRoute from 'src/components/Auth'
import Routes from 'src/router'
import NotFound from 'src/components/Exceptions/404'
import logRocket from 'logrocket'
import setLogRocket from 'logrocket-react'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    logRocket.init('obulj8/react-template')
    logRocket.identify('thanh1205tb', {
      email: 'nguyenthanh1205tb@gmail.com',
      name: 'thanh nguyen',
    })
    setLogRocket(logRocket)
  })

  return (
    <Switch>
      {RenderRoute(Routes)}
      <Route component={NotFound} />
    </Switch>
  )
}

export default React.memo(App)
