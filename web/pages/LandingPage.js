import React from 'react'
import Layout from '../components/Layout'
import sanityClient from '../client'
import {getAllLinks} from '../queries'
import PropTypes from 'prop-types'

const LandingPage = ({links}) => {
  console.log(links)
  return (
    <Layout>
      {links.map((l) => {
        return (
          <div>
            <div><a href={l.url}>{l.title}</a></div>
            <div><a href={l.donateUrl}>Make a Donation</a></div>
            <div>{l.category.title}</div>
          </div>
        )
      })}
    </Layout>
  )
}

export default LandingPage

LandingPage.propTypes = {
  links: PropTypes.arrayOf(PropTypes.node)
}

LandingPage.getInitialProps = async () => ({
  links: await sanityClient.fetch(getAllLinks)
})
