import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Headroom from 'react-headroom'

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 30px;
  width: 90%;
  margin: 0 auto;
  color: white;
  max-width: 940px;
  font-size: .8rem;
  padding: 1.5rem 0;
  h2, p {
    font-size: .7rem;
  }
  a {
    width: 50%;
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
  * {
    margin-bottom: 0;
    margin-top: 0;
  }
  @media (min-width: 700px) {
    font-size: 1.2rem;
    h2 {
      font-size: 1.2rem;
    }
  }
`

const SubNav = styled.div`
  width: 90%;
  margin: 0 auto .2rem;
  padding: 1.5rem 0 1rem;
  padding-top: 0;
  overflow-x: scroll;
  max-width: 940px;
  font-size: .8rem;
  div {
    width: 180%;
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
    div {
      max-width: 100%:
    }
    font-size: 1rem;
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
  //padding: 3rem 0;
  a:link, a:visited {
    color: black;
  }
`

const BgBlack = styled.div`
  /* background: #000;
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  padding-top: 1rem; */
  a:link, a:visited {
    color: white;
  }
`

const Footer = styled.div`
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

function Layout (props) {
  const {children, navigation, pageTitle, theme, childPage} = props
  const renderSubNav = ()=>{
    if (childPage) {
      console.log('child page prop present')
      return (
        <SubNav>
          <div>
            {navigation && navigation.map(item => (
              <a href={item.link} key={item.link}>
                {item.name}
              </a>
            ))}
          </div>
        </SubNav>
      )
    } else {
      console.log('child page prop NOT present')
    }
  }
  return (
    <Bg theme={theme} childPage={childPage}>
      <Head>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>
      <Content id='outer-container'>
        <Headroom>
          <BgBlack>
            <Nav className='top-nav'>
              <a href="/"><h2>SUPPORTPEOPLE.ONLINE</h2></a>
              <p>{pageTitle}</p>
            </Nav>
            {renderSubNav(childPage)}
          </BgBlack>
        </Headroom>

        <div id='page-wrap'>
          <div className='container'>
            <div className='content'>{children}</div>
          </div>
        </div>
        <Footer className="footer">
          Built by: <a href="https://instagram.com/senso_indo">@senso_indo</a>, <a href="https://instagram.com/names.fm">@names.fm</a>, <a href="https://instagram.com/jeffreymanful">@jeffreymanful</a> & <a href="https://instagram.com/0seans">@0seans</a>
        </Footer>

      </Content>
    </Bg>
  )
}

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  navigation: PropTypes.arrayOf(PropTypes.node),
  // childPage: string
}

export default Layout
