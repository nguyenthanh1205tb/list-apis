import { States } from 'src/types/Reducer.User'

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
