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
  align-items: center;
  height: 30px;
  margin-bottom: 20px;
  padding: 2rem 0;
  * {
    margin-bottom: 0;
    margin-top: 0;
  }
`

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 940px;
`

const Bg = styled.div`
  background: fff;
  color: #111;
  padding: 3rem 0;
`

const Alert = styled.div`
  background: #D15757;
  color: white;
  padding: .2rem .8rem;
`

function Layout (props) {
  const {children} = props
  return (
    <Bg>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>
      <Content id='outer-container'>
        <Nav>
          <h2>MNLINKS</h2>
          <p>BLACK LIVES MATTER</p>
        </Nav>

        <Alert>
          <p>In light of the recent protests across the world in response to the murder of George Floyd; there is a large need for donations to Bail Funds that allow people to get out of jail. Protest is a crucial part of society, and no one should be left destitute by exercising their rights and fighting White Supremacy.</p>
          <p>We’ve collated links to bail funds and GoFundMe campaigns, so you can use your one Instagram link to support multiple causes</p>
        </Alert>

        <p>Are we missing anything? <a href="https://instagram.com/senso_indo">Let us know</a></p>

        <div id='page-wrap'>
          <div className='container'>
            <div className='content'>{children}</div>
          </div>
        </div>
      </Content>
    </Bg>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default Layout
