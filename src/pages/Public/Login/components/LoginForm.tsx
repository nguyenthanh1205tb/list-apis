import { Button, Card, Elevation, FormGroup, InputGroup, Switch } from '@blueprintjs/core'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { PropsWithChildren } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from 'react-router'
import * as yup from 'yup'

interface LoginFormProps extends RouteComponentProps {}

const SCHEMA_FORM = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required().min(8).max(21),
  remember: yup.boolean().optional().default(false),
})

function LoginForm(_props: PropsWithChildren<LoginFormProps>) {
  const [t] = useTranslation()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    control,
  } = useForm({
    resolver: yupResolver(SCHEMA_FORM),
    mode: 'onChange',
  })

  const onSubmit = handleSubmit(values => {
    if (isValid) {
      console.log(values)
    }
  })

  return (
    <Card elevation={Elevation.TWO}>
      <div style={{ width: '320px' }}>
        <form onSubmit={onSubmit}>
          <FormGroup label="Email" labelFor="login-form-email-phonenumber">
            <InputGroup
              large
              type="email"
              id="login-form-email-phonenumber"
              leftIcon="envelope"
              placeholder={t('enter your email')}
              {...register('email')}
            />
            <p>{errors.email?.message}</p>
          </FormGroup>
          <FormGroup label="Password" labelFor="login-form-password">
            <InputGroup
              large
              type="password"
              id="login-form-password"
              leftIcon="lock"
              placeholder={t('enter your password')}
              {...register('password')}
            />
            <p>{errors.password?.message}</p>
          </FormGroup>
          <FormGroup>
            <Controller
              name="remember"
              control={control}
              render={({ field }) => (
                <Switch
                  large
                  inline
                  label="Remember me?"
                  innerLabelChecked="Yes"
                  innerLabel="No"
                  alignIndicator="right"
                  defaultChecked={false}
                  onChange={e => field.onChange(e.currentTarget.checked)}
                />
              )}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit" intent="primary" fill large>
              {t('login')}
            </Button>
          </FormGroup>
        </form>
      </div>
    </Card>
  )
}

export default React.memo(LoginForm)
