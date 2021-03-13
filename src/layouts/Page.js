/* eslint-disable multiline-ternary */
/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import PropTypes from 'prop-types'
import { Header, Footer, PageContent } from './'

const Page = props => {
  const { title, children, ...rest } = props
  const [titleToSet, setTitle] = useState('')

  useEffect(() => {
    title && setTitle(title)
  }, [title])

  return title ? (
    <div {...rest}>
      <HelmetProvider>
        <Helmet>
          <title>{titleToSet}</title>
        </Helmet>
        <Header />
        <PageContent>{children}</PageContent>
        <Footer />
      </HelmetProvider>
    </div>
  ) : (
    <></>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
}

export default Page
