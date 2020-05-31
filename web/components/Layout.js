import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

function Layout (props) {
  const {children} = props
  return (
      <>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
        </Head>
        <div className='container'>
          <div className='content'>{children}</div>
        </div>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default Layout
