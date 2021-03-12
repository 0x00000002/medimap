import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import routes from './../routes'
import ErrorBoundary from './ErrorBoundary'
import './../assets/css/App.css'
import { ProvideAuth, PrivateRoute } from './Authenticator'
import { AddNew, Facilities, Dashboard, LoginPage } from '../pages'

const App = props => {
  return (
    <Router>
      <ErrorBoundary>
        <ProvideAuth>
          <Switch>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <PrivateRoute exact path='/'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path='/facilities'>
              <Facilities />
            </PrivateRoute>
            <PrivateRoute path='/facilites/add'>
              <AddNew />
            </PrivateRoute>
          </Switch>
        </ProvideAuth>
      </ErrorBoundary>
    </Router>
  )
}

export default App
