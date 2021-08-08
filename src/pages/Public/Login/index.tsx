import { AnchorButton } from '@blueprintjs/core'
import React, { PropsWithChildren } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { RouteComponentProps } from 'react-router'
import { useCountriesQuery } from 'src/generated/graphql'

interface LoginPageProps extends RouteComponentProps {}

function LoginPage({ history }: PropsWithChildren<LoginPageProps>) {
  const { loading, data } = useCountriesQuery()
  const [countries, setCountries] = useState<any>()

  useEffect(() => {
    if (!loading && data) {
      setCountries(data.countries)
    }
  }, [loading, data])

  useEffect(() => {
    console.log(countries)
  }, [countries])

  return (
    <div>
      <h1>Login Page</h1>
      <AnchorButton text="Go to private Page" onClick={() => history.push('/admin')} />
    </div>
  )
}

export default React.memo(LoginPage)
