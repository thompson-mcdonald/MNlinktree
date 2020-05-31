import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  height: 30px;
  margin-bottom: 20px;
  * {
    margin-bottom: 0;
    margin-top: 0;
  }
`

function Layout (props) {
  const {children} = props
  return (
      <>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
        </Head>
        <div id="outer-container">
        <Nav>
          <h2>Links</h2>
          
        </Nav>

            <main id="page-wrap">
              <div className='container'>
                <div className='content'>{children}</div>
              </div>
            </main>
          </div>
      </>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default Layout
