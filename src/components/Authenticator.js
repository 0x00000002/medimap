/* eslint-disable multiline-ternary */
import React, { createContext, useContext, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'

import PropTypes from 'prop-types'

const authContext = createContext()

export const useAuth = () => {
  return useContext(authContext)
}

const useProvideAuth = () => {
  const [user, setUser] = useState(null)

  const signin = (name, cb) => {
    return Authenticator.signin(() => {
      setUser(name)
      cb()
    })
  }

  const signout = cb => {
    return Authenticator.signout(() => {
      setUser(null)
      cb()
    })
  }

  return {
    user,
    signin,
    signout
  }
}

export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

ProvideAuth.propTypes = {
  children: PropTypes.object
}

export const Authenticator = {
  isAuthenticated: false,
  signin: cb => {
    Authenticator.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout: cb => {
    Authenticator.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

PrivateRoute.propTypes = {
  children: PropTypes.object
}
