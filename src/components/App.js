import React, { createContext } from 'react'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './../routes'
import { createBrowserHistory } from 'history'
import ErrorBoundary from './ErrorBoundary'
import './../assets/css/App.css'

const history = createBrowserHistory()
const AppContext = createContext()

const App = props => {
  return (
    <Router history={history}>
      {/* <ScrollReset /> */}
      {/* <CookiesNotification /> */}
      <ErrorBoundary>
        <AppContext.Provider value={{}}>
          {renderRoutes(routes)}
        </AppContext.Provider>
      </ErrorBoundary>
    </Router>
  )
}

export default App
