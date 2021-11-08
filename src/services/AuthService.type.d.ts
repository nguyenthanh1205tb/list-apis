import { Maybe } from 'src/@types'
import { ServiceError } from '.'

export interface UserPoolConfig {
  cognito_client_id: string
  cognito_pool_id: string
  database: string
  environment: string
}

export type GetUserPoolConfigResponse = {
  data: Maybe<UserPoolConfigResponse>
  error: Maybe<ServiceError>
}
