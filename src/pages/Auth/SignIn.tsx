import React, { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import {
  CardContent,
  CircularProgress,
  Grid,
  IconButton,
  InputAdornment,
  TextFieldProps,
} from '@mui/material'
import { Box } from '@mui/system'
import { observer } from 'mobx-react-lite'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import ButtonGroupStyled from 'src/components/ButtonGroupStyled'
import ButtonStyled from 'src/components/ButtonStyled'
import theme from 'src/theme'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { CardStyled, TextFieldStyled } from './Styled'
import AuthStore from 'src/stores/AuthStore'
import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'
import AWSCognitoService from 'src/services/AWSCognitoService'
import { toast } from 'react-toastify'

const textFieldProps: TextFieldProps = {
  margin: 'normal',
  variant: 'outlined',
  fullWidth: true,
  size: 'medium',
}

type loginFormData = {
  username: string
  password: string
}

const loginFormSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
})

function SignIn() {
  const navigate = useNavigate()
  const { userPoolConfig, cognitoUserSession, setCognitoUserSession } =
    AuthStore
  const [loginLoading, setLoginLoading] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormData>({
    mode: 'onChange',
    resolver: yupResolver(loginFormSchema),
  })

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  const onSubmit = handleSubmit(values => {
    if (!userPoolConfig) throw new Error('userPoolConfig is null')
    setLoginLoading(true)
    const pool = new CognitoUserPool({
      ClientId: userPoolConfig.cognito_client_id,
      UserPoolId: userPoolConfig.cognito_pool_id,
    })
    const user = new CognitoUser({ Username: values.username, Pool: pool })
    const { signInWithCognitoUser } = new AWSCognitoService({ user, pool })
    signInWithCognitoUser(
      { username: values.username, password: values.password },
      {
        onSuccess: data => {
          setCognitoUserSession(data)
          setLoginLoading(false)
          toast('Login Success', {
            position: 'top-right',
            type: 'success',
            hideProgressBar: true,
          })
        },
        onFailure: (err: Error) => {
          toast(err.message, {
            position: 'top-right',
            type: 'error',
            hideProgressBar: true,
          })
          setLoginLoading(false)
        },
      },
    )
  })

  return (
    <form onSubmit={onSubmit}>
      <Grid container>
        <CardStyled>
          <CardContent>
            <Grid container>
              <Box display="flex" justifyContent="center" mb={2}>
                <img
                  src="/static/images/dashboard-icon.png"
                  width="50%"
                  alt="logo"
                />
              </Box>
            </Grid>
            <TextFieldStyled
              {...textFieldProps}
              {...register('username')}
              type="text"
              label="Username"
              error={errors.username ? true : false}
              autoFocus
            />
            <TextFieldStyled
              {...textFieldProps}
              {...register('password')}
              label="Password"
              type={passwordVisible ? 'text' : 'password'}
              error={errors.password ? true : false}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setPasswordVisible(!passwordVisible)}>
                      {passwordVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <ButtonGroupStyled
              orientation="vertical"
              fullWidth
              gap={2}
              sx={{ marginTop: theme.spacing(5) }}>
              <ButtonStyled
                type="submit"
                variant="contained"
                fullWidth
                color="sky">
                {loginLoading ? (
                  <CircularProgress size={24} style={{ color: 'white' }} />
                ) : (
                  'Sign In'
                )}
              </ButtonStyled>
              <ButtonStyled
                variant="contained"
                fullWidth
                onClick={() => navigate('/sign-up')}>
                Sign Up
              </ButtonStyled>
              <ButtonStyled
                variant="outlined"
                fullWidth
                style={{ color: 'white', borderColor: 'white' }}
                onClick={() => navigate('/forgot-password')}>
                Forgot Password?
              </ButtonStyled>
            </ButtonGroupStyled>
          </CardContent>
        </CardStyled>
      </Grid>
    </form>
  )
}

export default observer(SignIn)
