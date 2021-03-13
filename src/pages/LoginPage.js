import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import Page from '../layouts/Page'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useAuth } from './../components/Authenticator'

const useStyles = makeStyles(theme => ({
  root: {
    width: '50%',
    margin: '30px auto'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 20,
    padding: '20px 15px 0px 15px'
  },
  pos: {
    marginBottom: 12
  }
}))

export const LoginPage = () => {
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()
  const classes = useStyles()

  const { from } = location.state || { from: { pathname: '/' } }

  const [name, setUsername] = useState('')

  const onNameChange = event => setUsername(event?.target?.value)

  const login = () => {
    auth.signin(name, () => {
      history.replace(from)
    })
  }

  return (
    <Page title={'Login page'}>
      <Card className={classes.root} width='300' variant='outlined'>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom
        >
          You must log in to view the page at{' '}
          <b>www.domain.co.nz{from.pathname}</b>
        </Typography>
        <CardContent>
          <TextField
            id='standard-basic'
            label='Your name'
            value={name}
            onChange={onNameChange}
          />
        </CardContent>
        <CardActions>
          <Button color='primary' onClick={login}>
            Log in
          </Button>
        </CardActions>
      </Card>
    </Page>
  )
}
