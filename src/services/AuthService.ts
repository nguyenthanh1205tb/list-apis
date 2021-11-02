import { LoginResponse, LoginDataForm } from 'src/types/auth'
import Axios from 'src/utils/Axios'
class AuthService {
  async signInS(data: LoginDataForm) {
    try {
      const result = await Axios.post<LoginResponse>('/api/authenticated', data)
      if (result.data) {
        return result
      }
    } catch (err) {
      return err
    }
  }
}

export default new AuthService()
