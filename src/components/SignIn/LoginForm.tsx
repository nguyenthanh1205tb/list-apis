import React, { PropsWithChildren } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { RouteComponentProps } from 'react-router'
import useRules from 'src/hooks/useRules'

interface LoginFormProps extends RouteComponentProps {
  login: (email: string, pwd: string) => void
}

function LoginForm({ login }: PropsWithChildren<LoginFormProps>) {
  const [t] = useTranslation()
  const { LoginFormRules } = useRules()

  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    control,
  } = useForm()

  const onSubmit = handleSubmit(values => {
    if (isValid) {
      login(values.email, values.password)
    }
  })

  return <div>LOGIN PAGE</div>
}

export default React.memo(LoginForm)
