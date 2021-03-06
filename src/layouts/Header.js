/* eslint-disable multiline-ternary */
import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from './../components/Authenticator'
import { makeStyles } from '@material-ui/core/styles'
import logo from './../assets/images/logo.png'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const useStyles = makeStyles(theme => ({
  logo: { width: 50, marginRight: 20 },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2),
    height: 100
  },
  title: {
    flexGrow: 1
  },
  user: {
    margin: '0 10px',
    textTransform: 'uppercase'
  },
  button: {
    color: 'white'
  },
  link: {
    color: '#ddd',
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
      transition: '0.3s'
    }
  }
}))

export const Header = props => {
  const classes = useStyles()

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
            <Link className={classes.link} to='/'>
              Medi Map
            </Link>
          </Typography>
          <SignOut />
        </Toolbar>
      </AppBar>
    </div>
  )
}

const SignOut = () => {
  const history = useHistory()
  const { user, signout } = useAuth()
  const classes = useStyles()

  const onClick = () => signout(() => history.push('/'))

  return user ? (
    <>
      <span className={classes.user}>{user}</span>
      <Avatar alt={user} src='/broken-image.jpg' className={classes.avatar} />

      <Button className={classes.button} onClick={onClick}>
        Logout
      </Button>
    </>
  ) : (
    ''
  )
}
