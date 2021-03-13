import React from 'react'
import Page from '../layouts/Page'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

export const Dashboard = props => {
  return (
    <Page title={'Dashboard'}>
      <NestedGrid />
    </Page>
  )
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary
  },
  link: { textDecoration: 'none', color: 'red' },
  red: { '&:hover': { backgroundColor: 'red', color: 'white' } },
  lightBlue: { '&:hover': { backgroundColor: 'lightBlue' } },
  darkBlue: { '&:hover': { backgroundColor: 'darkBlue' } },
  yellow: { '&:hover': { backgroundColor: 'yellow' } },
  green: { '&:hover': { backgroundColor: 'green' } },
  purple: { '&:hover': { backgroundColor: 'purple' } }
}))

export default function NestedGrid () {
  const classes = useStyles()

  const Row1 = () => {
    return (
      <React.Fragment>
        <Grid item xs={4} className={classes.withLink}>
          <Link className={classes.link} to='/facilities'>
            <Paper className={`${classes.paper} ${classes.red}`}>
              Facilities
            </Paper>
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Paper className={`${classes.paper} ${classes.lightBlue}`}> </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={`${classes.paper} ${classes.darkBlue}`}> </Paper>
        </Grid>
      </React.Fragment>
    )
  }

  const Row2 = () => {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={`${classes.paper} ${classes.yellow}`}> </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={`${classes.paper} ${classes.green}`}> </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={`${classes.paper} ${classes.purple}`}> </Paper>
        </Grid>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Row1 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Row2 />
        </Grid>
      </Grid>
    </div>
  )
}
