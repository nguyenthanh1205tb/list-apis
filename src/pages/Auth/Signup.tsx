import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import AuthStore from 'src/stores/AuthStore'
import { toJS } from 'mobx'

function SignUp() {
  const { user } = AuthStore

  useEffect(() => {
    console.log(toJS(user))
  }, [user])
  return (
    <div className="rt-flex rt-justify-center">
      <div>
        <h1>Sign Up Page</h1>
        <Button variant="contained">Go go sign in</Button>
      </div>
    </div>
  )
}

export default SignUp
