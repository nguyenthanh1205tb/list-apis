import React from 'react'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { useHistory } from 'react-router-dom'
import AuthStore from 'src/stores/AuthStore'
import dayjs from 'dayjs'
import AuthService from 'src/services/AuthService'

function SignIn() {
  const authService = new AuthService()
  const history = useHistory()
  const login = async () => {
    const { err } = await authService.signIn({
      username: 'test',
      password: 'pwd',
    })
    if (!err) {
      AuthStore.login({
        access_token: 'this is token',
        expires: dayjs(new Date()).add(2, 'hours').toDate(),
        user: { _id: '1' },
      })
      history.push('/sign-up')
    }
  }
  return (
    <form>
      <Card sx={{ minWidth: 275 }}>
        <Container>
          <CardContent>
            <Typography>This is header</Typography>
            <TextField
              data-testid="signin-input-username"
              variant="standard"
              label="Username"
            />
            <TextField
              data-testid="signin-input-password"
              type="password"
              variant="standard"
              label="Password"
            />
          </CardContent>
          <CardActions>
            <Button
              data-testid="sign-btn-login"
              onClick={login}
              variant="contained">
              Sign in
            </Button>
          </CardActions>
        </Container>
      </Card>
    </form>
  )
}

export default SignIn
