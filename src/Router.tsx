import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
/**
 * LAYOUT COMPONENTS
 */
import PrivateLayout from 'src/layouts/PrivateLayout'
import PublicLayout from 'src/layouts/PublicLayout'
/**
 * PAGE COMPONENTS
 */
import NotFound from './pages/Exceptions/404'
import SignIn from 'src/pages/Auth/SignIn'
import SingUp from 'src/pages/Auth/Signup'

function Router() {
  return (
    <Switch>
      <Route
        path="/a"
        render={() => (
          <PrivateLayout>
            <Switch>
              <Redirect exact strict from="/a" to="/a/reports" />
              {/* <Route
                  path="/a/manage"
                  render={() => (
                    <ManagesLayout>
                      <Switch>
                        <Redirect exact strict from="/a/manage" to="/a/manage/users" />
                      </Switch>
                    </ManagesLayout>
                  )}
                /> */}
              <Route component={NotFound} />
            </Switch>
          </PrivateLayout>
        )}
      />

      <PublicLayout>
        <Switch>
          <Redirect exact strict from="/" to="/sign-in" />
          <Route exact strict sensitive path="/sign-in" component={SignIn} />
          <Route exact strict sensitive path="/sign-up" component={SingUp} />
          <Route component={NotFound} />
        </Switch>
      </PublicLayout>
    </Switch>
  )
}
export default Router
