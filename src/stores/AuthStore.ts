import { action, computed, makeAutoObservable, observable, toJS } from 'mobx'
import { UserPoolConfig } from 'src/services/AuthService.type'
import { Maybe } from 'src/@types'
import { CognitoUserSession } from 'amazon-cognito-identity-js'
import jscookie from 'js-cookie'

class AuthStore {
  @observable private _UserPoolConfig: Maybe<UserPoolConfig> = null
  @observable private _cognitoUserSession: Maybe<CognitoUserSession> = null

  constructor() {
    makeAutoObservable(this)
  }

  @computed get userPoolConfig(): Maybe<UserPoolConfig> {
    return toJS(this._UserPoolConfig)
  }

  @computed get cognitoUserSession(): Maybe<CognitoUserSession> {
    return toJS(this._cognitoUserSession)
  }

  @action setUserPoolConfig = (payload: Maybe<UserPoolConfig>) => {
    this._UserPoolConfig = payload
  }

  @action setCognitoUserSession = (payload: CognitoUserSession) => {
    this._cognitoUserSession = payload
    jscookie.set('token', payload.getAccessToken().getJwtToken())
  }
}

export default new AuthStore()
