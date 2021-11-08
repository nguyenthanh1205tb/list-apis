import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
/**
 * LAYOUT COMPONENTS
 */
import PrivateLayout from 'src/layouts/PrivateLayout'
import PublicLayout from 'src/layouts/PublicLayout'
/**
 * PAGE COMPONENTS
 */
import NotFound from './components/Exceptions/404'
const SignIn = lazy(() => import('src/pages/Auth/SignIn'))
const SingUp = lazy(() => import('src/pages/Auth/Signup'))

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sign-in" />} />
      <Route path="/auth" element={<Navigate to="/auth/reports" />} />
      <Route
        path="/*"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PublicLayout>
              <Routes>
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-up" element={<SingUp />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PublicLayout>
          </Suspense>
        }
      />
      <Route
        path="/auth/*"
        element={
          <PrivateLayout>
            <Routes>
              <Route path="reports" element={<div>this is reports page</div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PrivateLayout>
        }
      />
    </Routes>
  )
}
export default Router
