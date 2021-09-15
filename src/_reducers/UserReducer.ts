import { Maybe } from 'graphql/jsutils/Maybe'
import FirebaseApp from 'src/hooks/useFirebase'
export type UserInfo = FirebaseApp.auth.UserCredential

export type States = {
  userInfo: Maybe<UserInfo>
}

const initialState: States = {
  userInfo: null,
}

const AppReducer = (state = initialState, action: any): States => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, userInfo: action.payload }
    default:
      return state
  }
}

export default AppReducer
