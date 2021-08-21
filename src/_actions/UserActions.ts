import { UserInfo } from "src/types";

export const SET_USER = (user: UserInfo) => ({
  type: 'SET_USER',
  payload: user
})