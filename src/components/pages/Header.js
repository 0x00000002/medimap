import React, { useContext } from 'react'
// import PropTypes from 'prop-types'
import logo from './../../assets/images/logo.svg'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles(theme => ({
  logo: { width: 50 },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

export const Header = props => {
  const classes = useStyles()
  const { userName, loginFn, logoutFn } = useContext()

  const onClick = userName ? logoutFn : loginFn
  const buttonText = userName ? 'Logout' : 'Login'

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <img src={logo} alt='logo' className={classes.logo} />
          <Typography variant='h6' className={classes.title}>
            React logo
          </Typography>
          <Button color='inherit' onClick={onClick}>
            {buttonText}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

// Header.propTypes = {
// userName: PropTypes.bool,
// loginFn: PropTypes.func.isRequired,
// logoutFn: PropTypes.func.isRequired
// }
