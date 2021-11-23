import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
  IAuthenticationCallback,
} from 'amazon-cognito-identity-js'
import { signInWithCognitoUserData } from './AWSCognitoService.type'
class AWSCognitoService {
  private user: CognitoUser | null = null
  private pool: CognitoUserPool | null = null

  constructor(identity: { user: CognitoUser; pool: CognitoUserPool }) {
    this.user = identity.user
    this.pool = identity.pool
  }

  /**
   * sign in
   * @param payload signInWithCognitoUserData
   * @param callback IAuthenticationCallback
   */
  signInWithCognitoUser = async (
    payload: signInWithCognitoUserData,
    callback: IAuthenticationCallback,
  ) => {
    if (!this.user || !this.pool)
      throw new Error(
        'Something gone wrong! cognitoUser and cognitoUserPool is null',
      )

    const authDetails = new AuthenticationDetails({
      Username: payload.username,
      Password: payload.password,
    })

    this.user.authenticateUser(authDetails, {
      onSuccess: data => callback.onSuccess(data),
      onFailure: err => callback.onFailure(err),
      newPasswordRequired: (userAttribute, requiredAttributes) => {
        if (!callback.newPasswordRequired) return
        callback.newPasswordRequired(userAttribute, requiredAttributes)
      },
    })
  }
}

export default AWSCognitoService
