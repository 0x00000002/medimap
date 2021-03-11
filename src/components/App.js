import React from 'react'
import { Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './../routes'
import { createBrowserHistory } from 'history'
import ErrorBoundary from './ErrorBoundary'
import { AppContext } from './../hooks/'
import './../assets/css/App.css'

const history = createBrowserHistory()

const App = props => {
  return (
    <Router history={history}>
      <ErrorBoundary>
        <AppContext.Provider value={{}}>
          {renderRoutes(routes)}
        </AppContext.Provider>
      </ErrorBoundary>
    </Router>
  )
}

export default App
