import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import sanityClient from '../client'
import {getEndSarsLinks} from '../queries'
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
    opacity: .3
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
    opacity: .3
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

const LandingPage = ({endsars}) => {
  return (
    <Layout pageTitle="END SARS" childPage>
      <Head>
        <title>SUPPORTPEOPLE.ONLINE - #EndSars</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>
      <Alert className="alert">
      <p>#EndSARS is a social movement in Nigeria that started on Twitter calling for banning of the Special Anti-Robbery Squad, a unit of the Nigerian Police Force It is a call to end police oppression and brutality in Nigeria.</p>
      <p>The protests started as a social media campaign using the hashtag #ENDSARS to demand for Nigeria's government to scrap and end the deployment of Nigeria Police Force Special Anti-Robbery Squad, popularly known as SARS.</p>
      <p>Nigerians have shared both stories and video evidence of how members of SARS engaged in kidnapping, murder, theft, rape, torture, unlawful arrests, high-handedness, humiliation, unlawful detention, extrajudicial killings, and extortion.</p>
      <br />
      <p>We can not forget the lives that were lost in the Lekki Massacre.</p>
      <BubbleText />
      </Alert>

      <p>Are we missing anything? <a target='_blank' href='https://forms.gle/JKmAZTAh4am5Dawy7'>Let us know</a> </p>
      <FlexBox>

        {endsars && endsars.map((l) => {
          return (
            <Outer className='yemen'>
              <Title><a href={l.url} target='_blank'>{l.title}</a></Title>
              <Info>
                {l.url && (
                  <a className='button' href={l.url} target='_blank'>View Info</a>
                )}
                {l.donateUrl && (
                  <a className='button' href={l.donateUrl} target='_blank'>+ Make a Donation</a>
                )}
              </Info>
            </Outer>
          )
        })}
      </FlexBox>

    </Layout>
  )
}

export default LandingPage

LandingPage.propTypes = {
  // links: PropTypes.arrayOf(PropTypes.node),
  endsars: []
}

LandingPage.getInitialProps = async () => ({
  // links: await sanityClient.fetch(getAllLinks),
  endsars: await sanityClient.fetch(getEndSarsLinks)
})
