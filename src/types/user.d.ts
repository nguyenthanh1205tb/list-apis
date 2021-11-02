import { KeyString, Maybe } from '.'

export interface User extends KeyString {
  _id: string
  firstName?: Maybe<string>
  lastName?: Maybe<string>
  born?: Maybe<string>
  address?: Maybe<string>
}
