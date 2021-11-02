import { AxiosError } from 'axios'
import { LoginResponse, LoginDataForm } from 'src/types/auth'
import Axios from 'src/utils/Axios'
class AuthService {
  async signIn(data: LoginDataForm) {
    const result = await Axios.post<LoginResponse>('/login', data)
      .then(res => ({ data: res.data, err: null }))
      .catch((err: AxiosError) => ({
        err: { message: err.message },
        data: null,
      }))
    return result
  }
}

export default AuthService
