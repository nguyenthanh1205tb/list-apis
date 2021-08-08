import { States } from 'src/types/Reducer.User'

const initialState: States = {
  userInfo: {},
}

const AppReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}

export default AppReducer
