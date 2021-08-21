import { useDispatch } from 'react-redux'
import { UserInfo } from 'src/types'
import { SET_USER } from 'src/_actions/UserActions'

function useUser() {
  const dispatch = useDispatch()
  const set = (user: UserInfo) => dispatch(SET_USER(user))
  return {
    set,
  }
}

export default useUser
