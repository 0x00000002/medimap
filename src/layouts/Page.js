/* eslint-disable no-undef */
import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import PropTypes from 'prop-types'
import { Header, Footer, PageContent } from './'

const Page = props => {
  const { title, children, ...rest } = props

  return (
    <div {...rest}>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header />
        <PageContent>{children}</PageContent>
        <Footer />
      </HelmetProvider>
    </div>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default Page
