import { AxiosResponse } from 'axios'
import Axios from 'src/services/AxiosService'
import { ServiceError } from '.'
import { UserPoolConfig, GetUserPoolConfigResponse } from './AuthService.type'
class AuthService {
  /**
   * Get AWS cognito user pool data
   * @returns data CognitoUserPoolData
   * @returns error ServiceError
   */
  async getUserPoolConfig(): Promise<GetUserPoolConfigResponse> {
    // call with base uri
    const result = await Axios.get('')
      .then((res: AxiosResponse<UserPoolConfig>) => ({
        data: res.data,
        error: null,
      }))
      .catch((error: ServiceError) => ({ data: null, error }))
    return result
  }
}

export default AuthService
