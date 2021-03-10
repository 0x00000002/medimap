/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react'
import { Redirect } from 'react-router-dom'
import WithAuth from './layouts/Auth'
import { Signin, DisableAccount } from './views/Signin'
import ErrorPage from './views/Error'
import Settings from './views/Settings'

import { Authenticator } from 'aws-amplify-react'
import ExchangePage from './views/Exchange/ExchangePage'

const wrapUnauthenticated = Component => props => {
  return (
    <>
      <Component />
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
    path: '/disableaccount',
    exact: true,
    component: DisableAccount
  },
  {
    path: '/errors',
    component: ErrorPage
  },
  {
    path: '/',
    component: props => (
      <div id='authenticator'>
        <Authenticator hideDefault>
          <WithAuth {...props} />
        </Authenticator>
      </div>
    ),
    routes: [
      {
        path: '/login',
        exact: true,
        component: Signin
      },

      {
        path: '/exchange',
        exact: true,
        component: ExchangePage
      },
      {
        path: '/exchange/:market',
        exact: true,
        component: ExchangePage
      },
      {
        path: '/settings',
        exact: true,
        component: Settings
      },
      {
        path: '/settings/:tab',
        exact: true,
        component: Settings
      }
    ]
  },
  {
    component: () => <Redirect to='/' />
  }
]

export default routes
