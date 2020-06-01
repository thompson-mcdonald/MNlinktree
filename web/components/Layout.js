import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'

const Nav = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 90%;
  margin: 0 auto;
  color: white;
  a {
    width: 50%;
  }
  * {
    margin-bottom: 0;
    margin-top: 0;
  }
`

const SubNav = styled.div`
  width: 90%;
  margin: 0 auto .2rem;
  padding: 1.5rem 0 1rem;
  overflow-x: scroll;
  div {
    width: 165%;
  }
  a {
    margin-right: 1rem;
  }
  &:after {
    content: "";
    height: 20px;
    background: linear-gradient(270deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
    width: 30px;
    position: absolute;
    right: 0;
    top: 70px;
  }
  @media (min-width: 740px) {
    &:after {
      display: none;
    }
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
  a:link, a:visited {
    color: black;
  }
`

const BgBlack = styled.div`
  background: #000;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  padding-top: 1rem;
  a:link, a:visited {
    color: white;
  }
`

const Alert = styled.div`
  background: #D15757;
  color: white; 
  padding: .2rem .8rem;
  margin-top: 6rem;
`

const Footer = styled.div`
  font-size: 1.4rem;
  margin-top: 2rem;
`

function Layout (props) {
  const {children} = props
  return (
    <Bg>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>
      <Content id='outer-container'>
        <BgBlack>
          <Nav>
            <h2>MNLINKS</h2>
            <p>BLACK LIVES MATTER</p>
          </Nav>
          <SubNav>
            <div>
              <a href='#Bail Funds'>Bail Funds</a>
              <a href='#Protestor Resources'>Protestor Resources</a>
              <a href='#Help for Black Businesse'>Help for Black Businesses</a>
              <a href='#Donations'>Donations</a>
            </div>
          </SubNav>
        </BgBlack>

        <Alert>
          <p>In light of the recent protests across the world in response to the murder of George Floyd; there is a large need for donations to Bail Funds that allow people to get out of jail. Protest is a crucial part of society, and no one should be left destitute by exercising their rights and fighting White Supremacy.</p>
          <p>We’ve collated links to bail funds and GoFundMe campaigns, so you can use your one Instagram link to support multiple causes</p>
        </Alert>
        
        <div id='page-wrap'>
          <div className='container'>
            <div className='content'>{children}</div>
          </div>
        </div>
        <Footer>
          Built by: <a href="https://instagram.com/senso_indo">@senso_indo</a>, <a href="https://instagram.com/names.fm">@names.fm</a>, <a href="https://instagram.com/jeffreymanful">@jeffreymanful</a> & <a href="https://instagram.com/0seans">@0seans</a>,
        </Footer>

      </Content>
    </Bg>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
}

export default Layout
