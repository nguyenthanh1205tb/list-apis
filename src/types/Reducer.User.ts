import { Maybe } from 'yup/lib/types'
import { UserInfo } from '.'

export type States = {
  userInfo: Maybe<UserInfo>
}
