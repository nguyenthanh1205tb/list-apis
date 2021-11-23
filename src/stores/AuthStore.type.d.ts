import { CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'

export interface IdentityUser {
  user: CognitoUser
  pool: CognitoUserPool
}
