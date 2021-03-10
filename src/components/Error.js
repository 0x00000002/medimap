import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { PageContent } from './pages/index'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Typography } from '@material-ui/core'
import clsx from 'clsx'
import styles from '../assets/css/index.css'

const Error = props => {
  const { classes } = props
  return (
    <PageContent className={classes.centerOuter} title='Error 404'>
      <div className={classes.centerInner}>
        <Typography
          className={classes.marginBottom2}
          align='center'
          variant={'h2'}
        >
          404: The page you are looking for isn’t here
        </Typography>
        <Typography
          className={classes.marginBottom2}
          align='center'
          variant='subtitle2'
        >
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
        </Typography>
        <div className={clsx(classes.textCenter, classes.marginBottom2)}>
          <img
            className={classes.marginBottom2}
            alt='Under development'
            style={{ width: '20%' }}
            src='/images/undraw_page_not_found_su7k.svg'
          />
        </div>
        <div className={clsx(classes.textCenter, classes.marginTop2)}>
          <Button
            color='primary'
            component={RouterLink}
            to='/'
            variant='outlined'
          >
            Back to home
          </Button>
        </div>
      </div>
    </PageContent>
  )
}
export default withStyles(styles)(Error)
