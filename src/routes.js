/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import {
  LoginPage,
  Dashboard,
  Search as FacilitiesSearch,
  AddNew as AddNewFacility
} from './pages/'
import Page from './layouts/Page'
import ErrorPage from './components/Error'

const wrapUnauthenticated = Component => props => {
  return (
    <>
      <Component props={props} />
    </>
  )
}

const Authenticator = props => {
  const { children } = props
  console.log({ props })
  return (
    <>
      <h2>You should sign in</h2>
      {children}
    </>
  )
}

const routes = [
  {
    path: '/login',
    exact: true,
    component: wrapUnauthenticated(LoginPage)
  },
  {
    path: '/error',
    component: wrapUnauthenticated(ErrorPage)
  },
  {
    path: '/',
    exact: true,
    component: props => <Authenticator {...props} />,
    routes: [
      {
        path: '/dashboard',
        exact: true,
        component: Dashboard
      }
    ]
  },
  {
    path: '/facilities',
    component: props => <Authenticator {...props} />,
    routes: [
      {
        path: '/facilities/search',
        exact: true,
        component: FacilitiesSearch
      },
      {
        path: '/facilities/add',
        exact: true,
        component: AddNewFacility
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
