/* eslint-disable multiline-ternary */
import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const Auth = props => {
  console.log({ props })
  const { authState, location, route } = props
  const isLogged = useMemo(() => {
    const { pathname } = location
    if (authState === 'loading') {
      return false
    }
    if (
      pathname === '/login' ||
      pathname === '/signup' ||
      pathname === '/upgrade' ||
      pathname === '/forgotPasswordSubmit' ||
      pathname === '/passwordChangeSuccess' ||
      pathname === '/confirmSignup' ||
      pathname === '/passwordReset'
    ) {
      return false
    }
    if (authState !== 'signedIn') {
      if (pathname === '/balances') {
        const { search } = location
        const params = new URLSearchParams(search)
        const txid = params.get('txid')
        const accountId = params.get('accountId')
        const token = params.get('token')
        const type = params.get('type')
        const passParams = { txid, accountId, token, type }
        history.push({ pathname: '/login', state: { detail: passParams } })
        return false
      }
      return true
    }
    return true
  }, [authState])

  return (
    <div>
      {/* <UserContext.Provider value={{ ...user }}> */}
      <div>{isLogged ? <h2>Ура!</h2> : <h2>Увы нет</h2>}</div>
      {route.component}
      {/* </UserContext.Provider> */}
    </div>
  )
}

Auth.propTypes = {
  route: PropTypes.object,
  location: PropTypes.string,
  authState: PropTypes.object
}

export default Auth
