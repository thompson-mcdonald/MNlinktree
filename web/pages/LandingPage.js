import React from 'react'
import Layout from '../components/Layout'
import sanityClient from '../client'
import {getAllCategories} from '../queries'
// import PropTypes from 'prop-types'

const LandingPage = ({categories}) => {
  console.log(categories)
  return (
    <Layout>
      {categories && categories.map((cat) => {
        return (
          <div>
            <h2>{cat.title}</h2>
            <div>
              {cat.links && cat.links.map((l) => {
                return (
                  <div>
                    <div><a href={l.url}>{l.title}</a></div>
                    <div><a href={l.donateUrl}>Make a Donation</a></div>
                  </div>
                )
              })}
            </div>
          </div>
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
