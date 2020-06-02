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
    font-size: 1.2rem;
  }
  a:link, a:visited {
    color: white;
    text-decoration: none;
    background: #111;
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
  &:link, &:visited {
    color: white!important;
  }
  &:hover {
    background: white;
    border: 1px solid black;
    transition: all .2s;
    color: black!important;
  }
`

const BtnRow = styled.div`
  display: block;
  margin: 2rem 0 2rem;
`

const LandingPage = ({categories}) => {
  console.log(categories)

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const randomCause = (cat) => {
    return cat[2].links[getRandomInt(20)]
  }

  console.log(categories[0].links[getRandomInt(2)].donateUrl)

  return (
    <Layout>
      <Head>
        <title>MNLINKS - BLACK LIVES MATTER</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width, viewport-fit=cover' />
      </Head>

      <BtnRow>
        <CTA href={categories[0].links[getRandomInt(20)].donateUrl} target='_blank'>Donate to a Random Cause</CTA>
      </BtnRow>

      <p>Are we missing anything? <a target='_blank' href='https://forms.gle/JKmAZTAh4am5Dawy7'>Let us know</a></p>

      {categories && categories.map((cat) => {
        return (
          <BoxHalf id={cat.title}>
            <h2>{cat.title}</h2>
            <p>{cat.description}</p>
            <div>
              <FlexBox>
                {cat.links && cat.links.map((l) => {
                  return (
                    <Outer>
                      <Title><a href={l.url} target='_blank'>{l.title}</a></Title>
                      {l.donateUrl && (
                        <Info><a href={l.donateUrl} target='_blank'>Make a Donation</a></Info>
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
