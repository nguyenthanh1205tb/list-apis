import { RouteProps } from 'react-router-dom'

export interface Router extends RouteProps {
  path: string
  auth?: boolean
  children?: Router[]
}
