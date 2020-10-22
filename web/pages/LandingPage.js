import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import sanityClient from '../client'
import {getAllCategories} from '../queries'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import BubbleText from '../components/BubbleText'

const Title = styled.div`
  font-size: 1.6rem;
  padding-bottom: 1rem;
  a:link, a:visited {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid #888;
  }
  a:hover {
    opacity: .7
  }
`

const Outer = styled.div`
  padding: 1.5rem 0;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media (min-width: 840px) {
    width: 50%;
  }
`

const Info = styled.div`
  a {
    padding: .5rem;
    font-size: 1.2rem;
    margin-right: .5rem;
  }
  a:link, a:visited {
    color: white;
    text-decoration: none;
    background: #111;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  a:hover {
    border: 1px solid #fff;
    background: transparent;
    color: #111;
    opacity: .8
  }
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const BoxHalf = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: .4rem;
    opacity: .7;
  }
  p {
    font-size: 1.4rem;
    opacity: .5;
    margin: 0;
  }
`

const CTA = styled.a`
  padding: 1rem;
  border: 1px solid black;
  text-decoration: none;
  background: black;
  margin-right: .25rem;
  &:link, &:visited {
    color: white!important;
    border: 1px solid #eee;
  }
  &:hover {
    background: #888;
    border: 1px solid black;
    transition: all .2s;
    color: black!important;
  }
`

const BtnRow = styled.div`
  display: block;
  margin: 2rem 0 2rem;
`

const Alert = styled.div`
  background: #fff;
  color: #111;
  padding: .2rem .8rem;
  margin-top: 1rem;
  border: 1px solid #111;
  @media (min-width: 640px) {
    margin-top: 2rem;
  }
`

const Bubble = styled.div`
  border-radius: 17px;
  padding: 2px 16px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  margin-bottom: 16px;
  transition: all .4s ease;
  p {
    margin: 0;
    padding: 0;
  }

  svg {
    height: 18px;
    width: 18px;
    margin-right: 12px;
    g {
      fill: white;
    }
  }
`

const TitleLine = styled.h2`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  line-height: 60px;
  &:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    width: 100%;
    bottom: 0;
    height: 1px;
    background: black;
  }
`

const Causes = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  .cause {
    width: 48%;
    padding: 0 1em;
    margin-bottom: 1em;
  //  padding-left: 0;
    transition: all .4s ease;
    position: relative;
    text-decoration: none;
    color: white;
    h3 {
      color: white;
      text-decoration: none;
    }
    &:after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: black;
      display: block;
      z-index: -1;
      opacity: 0.8;
    }
    &:hover {
      padding-left: 1.3em;
      &:after {
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    .cause {
      width: 100%;
      margin-bottom: 16px;
    }
  }
`

const LandingPage = ({categories}) => {
  console.log(categories)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const randomCause = (cat) => {
    return cat[2].links[getRandomInt(20)]
  }

  const navItems = [
    {
      name: 'Bail Funds',
      link: '#Bail%20Funds'
    },
    {
      name: 'Protestor Resources',
      link: '#Protestor%20Resources'
    },
    {
      name: 'Help for Black-Owned Businesses',
      link: '#Help%20for%20Black%20Businesses'
    },
    {
      name: 'Donations',
      link: '#Donations'
    }
  ]

  console.log(categories[0].links[getRandomInt(2)].donateUrl)

  return (
    <Layout navigation={navItems} pageTitle='SUPPORT, LEARN, SHARE'>
      <Head>
        <title>SUPPORTPEOPLE.ONLINE</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>

      <Alert className="alert">
        <p>Initially spurred on by the BlackLivesMatter movement we created supportpeople.online in an attempt to collate and collect resources</p>
        <p>With a wave of support online for those who are suffering we hope this place can extend and support those who need it most.</p>
        <p>Always eager to adapt, learn and develop please use the contact from below via 'Let us know' to inform us of any further information you might feel appropriate</p>
        <p>We’ve collated links to bail funds and GoFundMe campaigns, so you can use your one Instagram link to support multiple causes</p>
        <BubbleText />
      </Alert>

      <p>Are we missing anything? <a target='_blank' href='https://forms.gle/JKmAZTAh4am5Dawy7'>Let us know</a> </p>

      <TitleLine>Causes to support</TitleLine>

      <Causes>
      <a className='cause blm' href="/blacklivesmatter">
        <h3>Black Lives Matter</h3>
      </a>

      <a className='cause yemen' href="/yemen">
        <h3>Help Yemen</h3>
      </a>

      <a className='cause endsars' href="/endsars">
        <h3>End Sars</h3>
      </a>
      </Causes>

    </Layout>
  )
}

export default LandingPage

LandingPage.propTypes = {
  // links: PropTypes.arrayOf(PropTypes.node),
  categories: []
}

LandingPage.getInitialProps = async () => ({
  // links: await sanityClient.fetch(getAllLinks),
  categories: await sanityClient.fetch(getAllCategories)
})
