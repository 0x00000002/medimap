import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Page from '../../layouts/Page'
import { DataGrid } from '@material-ui/data-grid'
import { columns, data as rows } from './../../assets/_testdata'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  divider: {
    height: 28,
    margin: 4
  },
  search: {
    display: 'flex',
    flexDirection: 'row'
  },
  margin: {
    fontSize: '1.2rem'
  }
}))

export const Facilities = props => {
  const [name, setName] = useState('')
  const handleSearch = event => setName(event.target.value)

  return (
    <Page title='Facilities search'>
      <h1>Facilities </h1>
      <FacilitiesSearch onType={handleSearch} name={name} />
      <FacilitiesList name={name} />
    </Page>
  )
}

export const FacilitiesSearch = props => {
  const classes = useStyles()

  return (
    <Paper component='form' className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder='Search facilities by name'
        inputProps={{ 'aria-label': 'search facilities' }}
        onChange={props.onType}
        value={props.name}
      />
      <IconButton
        type='submit'
        className={classes.iconButton}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation='vertical' />
      <IconButton aria-label='delete' className={classes.margin}>
        <AddIcon />
      </IconButton>
    </Paper>
  )
}

FacilitiesSearch.propTypes = {
  onType: PropTypes.func,
  name: PropTypes.string
}

export const FacilitiesList = props => {
  return (
    <div style={{ height: 400, width: '100%', marginTop: 30 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        sortModel={[
          {
            field: 'Sitename',
            sort: 'asc'
          }
        ]}
        filterModel={{
          items: [
            {
              columnField: 'Sitename',
              value: props.name,
              operatorValue: 'contains'
            }
          ]
        }}
      />
    </div>
  )
}

FacilitiesList.propTypes = {
  name: PropTypes.string
}
