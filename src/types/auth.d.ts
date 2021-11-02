import { User } from './user'

export interface LoginResponse {
  user: User
  access_token: string
  expires: number | Date
}

export interface LoginDataForm {
  username: string
  password: string
}
