import React from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import sanityClient from '../client'
import {getAllCategories} from '../queries'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const Title = styled.div`
  font-size: 1.8rem;
  padding-bottom: 1rem;
  a:link, a:visited {
    color: black;
    text-decoration: none;
    border-bottom: 1px solid #888;
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
  }
  a:link, a:visited {
    color: white;
    text-decoration: none;
    background: #D15757;
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
  }
`

const LandingPage = ({categories}) => {
  console.log(categories)
  return (
    <Layout>
      <Head>
        <title>MNLINKS - BLACK LIVES MATTER</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>
      {categories && categories.map((cat) => {
        return (
          <BoxHalf>
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
            <div>
              <FlexBox>
                {cat.links && cat.links.map((l) => {
                  return (
                    <Outer>
                      <Title><a href={l.url}>{l.title}</a></Title>
                      {l.donateUrl && (
                        <Info><a href={l.donateUrl}>Make a Donation</a></Info>
                      )}
                    </Outer>
                  )
                })}
              </FlexBox>
            </div>
          </BoxHalf>
        )
      })}
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
