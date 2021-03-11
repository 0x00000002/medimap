import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import styles from '../assets/css/index.css'
import Page from '../layouts/Page'

const Error = props => (
  <Page title='Error' className='error'>
    <div>
      404: The page you are looking for isn’t here
      <Button color='primary' component={Link} to='/' variant='outlined'>
        Back to home
      </Button>
    </div>
  </Page>
)

export default withStyles(styles)(Error)
