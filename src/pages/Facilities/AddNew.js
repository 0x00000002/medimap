import React from 'react'
import Modal from '@material-ui/core/Modal'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CloseIcon from '@material-ui/icons/Close'

const testOne = {
  Address: '12 Seaspray Drive, Bayfair, Tauranga',
  Country: 'New Zealand',
  Email: 'tauranga@nofacility.com',
  ID: 6,
  Regionid: 15,
  Sitename: 'Bayfair Tauranga',
  StartMonth: 'March',
  id: 6
}

const useStyles = makeStyles(theme => ({
  paper: {
    width: 400,
    margin: '0 auto',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: 'flex'
  },
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  }
}))

export const AddNew = props => {
  const classes = useStyles()

  return (
    <div>
      <Modal
        open={false || props.open}
        onClose={() => props.handleModal(false)}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <FacilityForm onClose={() => props.handleModal(false)} />
      </Modal>
    </div>
  )
}

AddNew.propTypes = {
  handleModal: PropTypes.func,
  open: PropTypes.bool
}

const FacilityForm = props => {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Paper component='form' className={classes.paper}>
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label='settings' onClick={props.onClose}>
              <CloseIcon />
            </IconButton>
          }
          title='Add new facility'
          subheader='Please, fill the form'
        />
        <CardMedia
          className={classes.media}
          image='/static/images/cards/paella.jpg'
          title='Paella dish'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that don’t
              open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Paper>
  )
}

FacilityForm.propTypes = {
  onClose: PropTypes.func
}
