import React, { Fragment, useEffect } from 'react'
import { useGetUserPoolConfig } from './hooks/useAuthService'
import Router from './Router'
import AuthStore from './stores/AuthStore'
import { ToastContainer } from 'react-toastify'

function App() {
  const { setUserPoolConfig } = AuthStore
  const { loading, data } = useGetUserPoolConfig()
  useEffect(() => {
    if (!loading && data) {
      setUserPoolConfig(data)
    }
  }, [data])
  return (
    <Fragment>
      <ToastContainer position="top-right" pauseOnHover hideProgressBar />
      <Router />
    </Fragment>
  )
}

export default App
