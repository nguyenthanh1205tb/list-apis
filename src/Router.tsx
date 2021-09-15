import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import PrivateAuth from 'src/components/Auth/Private'
import PublicAuth from 'src/components/Auth/Public'
import ManagesLayout from 'src/layouts/Manages'
import PrivateLayout from 'src/layouts/Private'
import PublicLayout from 'src/layouts/Public'
import UserManage from 'src/pages/Manages/User'
import Reports from 'src/pages/Reports'
import SignIn from 'src/pages/SignIn'
import SingUp from 'src/pages/SignUp'
import NotFound from './pages/Exceptions/404'

function Router() {
  return (
    <Switch>
      <Route
        path="/a"
        render={() => (
          <PrivateAuth>
            <PrivateLayout>
              <Switch>
                <Redirect exact strict from="/a" to="/a/reports" />
                <Route exact strict path="/a/reports" component={Reports} />
                <Route
                  path="/a/manage"
                  render={() => (
                    <ManagesLayout>
                      <Switch>
                        <Redirect exact strict from="/a/manage" to="/a/manage/users" />
                        <Route path="/a/manage/users" component={UserManage} />
                      </Switch>
                    </ManagesLayout>
                  )}
                />
                <Route component={NotFound} />
              </Switch>
            </PrivateLayout>
          </PrivateAuth>
        )}
      />

      <PublicAuth>
        <PublicLayout>
          <Switch>
            <Redirect exact strict from="/" to="/sign-in" />
            <Route exact strict sensitive path="/sign-in" component={SignIn} />
            <Route exact strict sensitive path="/sign-up" component={SingUp} />
            <Route component={NotFound} />
          </Switch>
        </PublicLayout>
      </PublicAuth>
    </Switch>
  )
}
export default Router
