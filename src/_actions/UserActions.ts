import { UserInfo } from "src/_reducers/UserReducer";

export const SET_USER = (user: UserInfo) => ({
  type: 'SET_USER',
  payload: user,
})
