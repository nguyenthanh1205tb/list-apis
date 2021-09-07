import { useDispatch } from 'react-redux'
import { SET_USER } from 'src/_actions/UserActions'
import { UserInfo } from 'src/_reducers/UserReducer'

function useUser() {
  const dispatch = useDispatch()
  const set = (user: UserInfo) => dispatch(SET_USER(user))
  return {
    set,
  }
}

export default useUser
