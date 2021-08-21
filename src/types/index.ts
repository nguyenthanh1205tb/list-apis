import { RouteProps } from 'react-router-dom'
import FirebaseApp from 'src/hooks/useFirebase'
export type UserInfo = FirebaseApp.auth.UserCredential
export interface Router extends RouteProps {
  path: string
  auth?: boolean
  children?: Router[]
}
