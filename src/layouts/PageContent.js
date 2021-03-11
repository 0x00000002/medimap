import React from 'react'
import PropTypes from 'prop-types'

export const PageContent = props => {
  return <div id='content'>{props.children}</div>
}

PageContent.propTypes = {
  children: PropTypes.node
}
