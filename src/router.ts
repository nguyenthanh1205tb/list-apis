import { lazy } from 'react'
import { Router } from 'src/types/Root'
import PrivateLayout from 'src/layouts/Private'
import PublicLayout from 'src/layouts/Public'

const LoginPage = lazy(() => import(/** webpackChunkName "[Login Page]" */ 'src/pages/Public/Login'))
const RegisterPage = lazy(() => import(/** webpackChunkName "[Register Page]" */ 'src/pages/Public/Register'))
const DashboardPage = lazy(() => import(/** webpackChunkName "[Dashboard Page]" */ 'src/pages/Private/Dashboard'))
const UserPage = lazy(() => import(/** webpackChunkName "[User Page]"*/ 'src/pages/Private/User'))

const Routes: Router[] = [
  {
    path: '/admin',
    component: PrivateLayout,
    auth: true,
    children: [
      {
        path: '/admin/dashboard',
        component: DashboardPage,
        exact: true,
        auth: true,
      },
      {
        path: '/admin/management',
        auth: true,
        children: [
          {
            path: '/admin/management/user',
            component: UserPage,
            auth: true,
          },
        ],
      },
    ],
  },
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '/login',
        component: LoginPage,
      },
      {
        path: '/register',
        component: RegisterPage,
      },
    ],
  },
]

export default Routes
