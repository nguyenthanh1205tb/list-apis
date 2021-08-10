import { Button } from '@blueprintjs/core'
import React, { PropsWithChildren } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { useCountriesQuery } from 'src/generated/graphql'

interface LoginPageProps extends RouteComponentProps {}

function LoginPage({ history }: PropsWithChildren<LoginPageProps>) {
  const { loading, data } = useCountriesQuery()
  const [countries, setCountries] = useState<any>()
  const dispatch = useDispatch()

  useEffect(() => {
    if (!loading && data) {
      setCountries(data.countries)
    }
  }, [loading, data])

  useEffect(() => {
    console.log(countries)
    dispatch({ type: 'SET_USER', payload: 'test' })
  }, [countries])

  return (
    <div>
      <h1>Login Page</h1>
      <Button text="Go to private Page" onClick={() => history.push('/admin')} />
      <Button text="Go to register page" onClick={() => history.push('/register')} />
    </div>
  )
}

export default React.memo(LoginPage)
