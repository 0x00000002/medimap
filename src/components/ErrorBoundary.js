/* eslint-disable react/prop-types */
import { Component } from 'react'

export class ErrorBoundary extends Component {
  componentDidCatch (error, errorInfo) {
    console.log('error', error)
    console.log('errorInfo', errorInfo)
  }

  render () {
    return this.props.children
  }
}

export default ErrorBoundary
