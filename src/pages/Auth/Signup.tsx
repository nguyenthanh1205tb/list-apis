import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function SignUp() {
  const navigate = useNavigate()
  return (
    <div className="rt-flex rt-justify-center">
      <div>
        <h1>Sign Up Page</h1>
        <h6>Coming soon</h6>
        <Button variant="contained" onClick={() => navigate('/sign-in')}>
          Go go sign in
        </Button>
      </div>
    </div>
  )
}

export default SignUp
