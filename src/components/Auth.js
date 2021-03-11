import React, { useEffect, useContext, useState, useMemo } from 'react'
import { renderRoutes } from 'react-router-config'
import AutoLogoutPopup from './components/autoLogoutPopup'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import Header from '../../components/Header/Header.jsx'
import HeaderLinks from '../../components/Header/HeaderLinks.jsx'
import { Cache } from 'aws-amplify'
import { Zendesk } from '../../views/Zendesk'

const Auth = props => {
  const { classes, route, authState, location, history } = props
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false)
  const { alert, hideAlert, setFxRate, setFees } = useContext(AppContext)
  const user = useUser({ authState, location })
  const { request } = useAxios()
  const total = useTotal({
    authState,
    location,
    accountId: user?.user?.accountId
  })

  const isLogin = useMemo(() => {
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
  }, [authState, location.pathname])

  const getFiatRate = async () => {
    const [fxRatesData] = (await request.GET(PATH.fxRates({}).fxRates)) || [
      { rate: 1, buy: 1, sell: 1 }
    ]
    setFxRate(fxRatesData)
    Cache.setItem('fxRate', JSON.stringify(fxRatesData))
  }

  const getFees = async () => {
    const [fees] = await request.GET(PATH.orders({}).fees)
    setFees(fees)
  }

  useEffect(() => {
    isLogin && getFiatRate()
    isLogin && getFees()
  }, [isLogin])

  return (
    <div className={clsx(classes.height100)}>
      <UserContext.Provider value={{ ...user, ...total }}>
        <TotalContext.Provider value={{ ...total }}>
          <div
            className={clsx(
              classes.container,
              classes.height100,
              classes.paddingTopOuter,
              classes.autoScroller
            )}
          >
            <CssBaseline />
            {isLogin ? (
              <Topbar
                onOpenNavBarMobile={() => setOpenNavBarMobile(true)}
                authState={authState}
                {...props}
              />
            ) : (
              <Header
                brand=''
                links={<HeaderLinks dropdownHoverColor='info' />}
                // fixed
                color='rose'
                changeColorOnScroll={{
                  height: 30,
                  color: 'rose'
                }}
              />
            )}
            {isLogin && (
              <Sidebar
                className={classes.navBar}
                onMobileClose={() => setOpenNavBarMobile(false)}
                openMobile={openNavBarMobile}
                {...props}
              />
            )}

            <Zendesk isLogin={isLogin} />

            <main className={clsx(classes.width100)}>
              {authState === 'loading' && <LinearProgress />}
              {authState !== 'loading' &&
                renderRoutes(route.routes, { ...props })}
            </main>

            <Snackbar
              open={alert.open}
              anchorOrigin={{
                vertical: authState === 'signedIn' ? 'top' : 'bottom',
                horizontal: 'center'
              }}
              autoHideDuration={4000}
              onClose={hideAlert}
            >
              <Alert onClose={hideAlert} severity={alert.type}>
                {alert.message}
              </Alert>
            </Snackbar>
            <AutoLogoutPopup authState={authState} />
          </div>
        </TotalContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

Auth.propTypes = {
  route: PropTypes.object
}

export default withStyles(styles)(Auth)
