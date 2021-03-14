/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

function Alert (props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const warningTime = 3000 // 3 sec rather than 3 min, just to show the alert
const events = ['load', 'mousemove', 'mousedown', 'click', 'scroll', 'keypress']

const LogoutPopup = () => {
  const [alert, setAlert] = useState(false)

  let warnTimeout

  const warn = () => setAlert(true)
  const setTimeouts = () => (warnTimeout = setTimeout(warn, warningTime))
  const clearTimeouts = () => warnTimeout && clearTimeout(warnTimeout)

  const resetTimeout = () => {
    clearTimeouts()
    setTimeouts()
  }

  useEffect(() => {
    events.map(i => window.addEventListener(events[i], resetTimeout))
    setTimeouts()

    return () =>
      events.map(i => {
        window.removeEventListener(events[i], resetTimeout)
        clearTimeouts()
      })
  }, [])

  return (
    <Snackbar
      open={alert}
      autoHideDuration={6000}
      onClose={() => setAlert(false)}
    >
      <Alert severity='warning'>Your session will expire soon</Alert>
    </Snackbar>
  )
}

export default LogoutPopup
