/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react'
import { Redirect } from 'react-router-dom'
import { LoginPage } from './components/pages/'
import ErrorPage from './components/Error'

const wrapUnauthenticated = Component => props => {
  return (
    <>
      <Component />
    </>
  )
}

const Authenticator = props => {
  return (
    <>
      <h2>You should sign in</h2>
      {props.children}
    </>
  )
}

const routes = [
  {
    path: '/',
    exact: true,
    component: wrapUnauthenticated(LoginPage)
  },

  {
    path: '/errors',
    component: ErrorPage
  },
  {
    path: '/',
    component: props => <Authenticator {...props} />,
    routes: [
      {
        path: '/login',
        exact: true,
        component: LoginPage
      },

      {
        path: '/settings',
        exact: true,
        component: LoginPage
      }
    ]
  },
  {
    component: () => <Redirect to='/' />
  }
]

export default routes
