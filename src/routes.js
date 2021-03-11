/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { LoginPage, MainPage } from './pages/'
import ErrorPage from './components/Error'

const wrapUnauthenticated = Component => props => {
  return (
    <>
      <Component props={props} />
    </>
  )
}

const Authenticator = ({ children }) => {
  return (
    <>
      <h2>You should sign in</h2>
      {children}
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
    path: '/error',
    component: wrapUnauthenticated(ErrorPage)
  },
  {
    path: '/',
    component: props => <Authenticator {...props} />,
    routes: [
      {
        path: '/MainPage',
        exact: true,
        component: MainPage
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

Authenticator.propTypes = {
  children: PropTypes.elementType
}

export default routes
