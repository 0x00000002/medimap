import React from 'react'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'

import CloseIcon from '@material-ui/icons/Close'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 700,
    margin: '5% auto',
    border: 0
  },
  form: {},
  content: {},
  header: {
    margin: '30px 20px 10px 40px'
  },
  grid: {},
  cell: {
    border: 0,
    boxShadow: 'none',
    justifyContent: 'center',
    display: 'flex',
    padding: '10px',
    margin: 0
  },
  bttn: {
    width: '200px',
    padding: '10px 40px',
    margin: '30px 0 50px'
  },
  formControl: {
    width: 250
  },
  text: {
    width: 250
  }
}))

export const AddNew = ({ data }) => {
  const classes = useStyles()
  const { open, onClose } = data
  return (
    <Modal
      open={false || open}
      onClose={onClose}
      aria-labelledby='simple-modal-title'
      aria-describedby='simple-modal-description'
    >
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label='settings' onClick={onClose}>
              <CloseIcon />
            </IconButton>
          }
          title='Add new facility'
          subheader='* Mandatory fields'
          className={classes.header}
        />
        <CardContent className={classes.content}>
          <FacilityForm data={data} />
        </CardContent>
      </Card>
    </Modal>
  )
}

AddNew.propTypes = {
  data: PropTypes.shape({
    onClose: PropTypes.func,
    open: PropTypes.bool,
    id: PropTypes.number,
    onAdd: PropTypes.func
  })
}

const FacilityForm = ({ data }) => {
  const { id, onAdd } = data

  const [region, setRegion] = React.useState('')
  const [month, setMonth] = React.useState('')
  const [sitename, setSitename] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [address, setAddress] = React.useState('')
  const [country, setCountry] = React.useState('')

  const handleChangeRegion = event => setRegion(event.target.value)
  const handleChangeMonth = event => setMonth(event.target.value)
  const handleChangeSitename = event => setSitename(event.target.value)
  const handleChangeCountry = event => setCountry(event.target.value)
  const handleChangeAddress = event => setAddress(event.target.value)
  const handleChangeEmail = event => setEmail(event.target.value)
  const handleSubmit = event => {
    event.preventDefault()
    onAdd({
      id,
      ID: id,
      Sitename: sitename,
      Email: email,
      Address: address,
      Country: country,
      StartMonth: month,
      Regionid: region
    })
  }

  const classes = useStyles()

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
      noValidate
      autoComplete='off'
    >
      <Grid container className={classes.grid} spacing={1}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.cell}>
            <TextField
              required
              id='sitename'
              label='Sitename'
              value={sitename}
              onChange={handleChangeSitename}
              className={classes.text}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.cell}>
            <TextField
              required
              id='address'
              label='Address'
              value={address}
              onChange={handleChangeAddress}
              className={classes.text}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.cell}>
            <TextField
              id='email'
              label='Email'
              onChange={handleChangeEmail}
              value={email}
              className={classes.text}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.cell}>
            <TextField
              required
              id='country'
              label='Country'
              value={country}
              onChange={handleChangeCountry}
              className={classes.text}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.cell}>
            <FormControl required className={classes.formControl}>
              <InputLabel id='start-month-select-label'>Start Month</InputLabel>
              <Select
                labelId='start-month-select-label'
                id='start-month-select'
                value={month}
                onChange={handleChangeMonth}
              >
                <MenuItem value={'January'}>January</MenuItem>
                <MenuItem value={'February'}>February</MenuItem>
                <MenuItem value={'March'}>March</MenuItem>
                <MenuItem value={'April'}>April</MenuItem>
                <MenuItem value={'May'}>May</MenuItem>
                <MenuItem value={'June'}>June</MenuItem>
                <MenuItem value={'July'}>July</MenuItem>
                <MenuItem value={'August'}>August</MenuItem>
                <MenuItem value={'September'}>September</MenuItem>
                <MenuItem value={'October'}>October</MenuItem>
                <MenuItem value={'November'}>November</MenuItem>
                <MenuItem value={'December'}>December</MenuItem>
              </Select>
              <FormHelperText>Potentially</FormHelperText>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.cell}>
            <FormControl className={classes.formControl}>
              <InputLabel id='region-select-label'>Region</InputLabel>
              <Select
                labelId='region-select-label'
                id='region-select'
                value={region}
                onChange={handleChangeRegion}
              >
                <MenuItem value={1}>Northland</MenuItem>
                <MenuItem value={2}>Auckland</MenuItem>
                <MenuItem value={3}>Canterbury</MenuItem>
                <MenuItem value={4}>West Coast</MenuItem>
                <MenuItem value={5}>Wellington</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.cell}>
            <Button
              color='primary'
              type='submit'
              variant='outlined'
              className={classes.bttn}
            >
              Save
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </form>
  )
}

FacilityForm.propTypes = {
  data: PropTypes.shape({
    onClose: PropTypes.func,
    onAdd: PropTypes.func,
    id: PropTypes.number
  })
}
