import { ApolloClient, InMemoryCache } from '@apollo/client'
import { APOLLO_URI } from './configs'

const client = new ApolloClient({
  uri: APOLLO_URI,
  cache: new InMemoryCache(),
})

export { client }
