import { useTranslation } from 'react-i18next'

function LoginFormRules() {
  const [t] = useTranslation()
  return {
    email: {
      required: t('email is required'),
    },
    password: {
      required: t('password is required'),
    },
  }
}

function useRules() {
  return {
    LoginFormRules: LoginFormRules(),
  }
}

export default useRules
