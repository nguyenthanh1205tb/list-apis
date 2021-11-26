import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import PublicLayout from 'src/layouts/PublicLayout'
const ListApis = lazy(() => import('src/pages/ListApis'))

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/list-apis" />} />
      <Route
        path="/*"
        element={
          <Suspense fallback={<div>loading...</div>}>
            <PublicLayout>
              <Routes>
                <Route path="list-apis" element={<ListApis />} />
              </Routes>
            </PublicLayout>
          </Suspense>
        }
      />
    </Routes>
  )
}
export default Router
