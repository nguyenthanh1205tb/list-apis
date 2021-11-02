import dayjs from 'dayjs'
import jscookie from 'js-cookie'
import { action, makeAutoObservable, observable } from 'mobx'
import { Maybe } from 'src/types'
import { LoginResponse } from 'src/types/auth'
import { User } from 'src/types/user'

class AuthStore {
  @observable user: Maybe<User> = null
  @observable access_token: Maybe<string> = null
  @observable expires: Maybe<number | Date> = null

  constructor() {
    makeAutoObservable(this)
  }

  @action async login(payload: LoginResponse): Promise<boolean> {
    return new Promise(resolve => {
      this.user = payload.user
      this.access_token = payload.access_token
      this.expires = payload.expires
      jscookie.set('token', payload.access_token, {
        expires: dayjs(payload.expires).add(2, 'hours').toDate(),
      })
      resolve(true)
    })
  }

  @action logout() {
    this.user = null
    this.access_token = null
    this.expires = null
    jscookie.remove('token')
  }

  @action setUser(user: User) {
    if (user) {
      Object.keys(user).map(item => {
        if (user[item] && this.user) {
          this.user[item] = user[item]
        }
      })
    }
  }
}

export default AuthStore
