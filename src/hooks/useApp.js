import React from 'react'

const appState = {
  userAuthenticated: false
}

export const AppContext = React.createContext(appState)
