import React from 'react'
import Layout from '../components/Layout'
import sanityClient from '../client'
import {getCategories} from '../queries'
// import PropTypes from 'prop-types'

const CategoryList = ({categories}) => {
  console.log(categories)
  return (
    <div>
      {categories?.map((cat) => (
        <div>
          <h2>{cat.title}</h2>
          <p>
            <strong>{cat.description}</strong>
          </p>
          <div>
            {cat.links.map((link) => (
              <div>
                <h4>{link.title}</h4>
                <div>
                  <label>Main url</label>
                  <a href={link.url}>{link.url}</a>
                </div>
                <div>
                  <label>Donation url</label>
                  <a href={link.donateUrl}>{link.donateUrl}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

// eslint-disable-next-line react/prop-types
const LandingPage = ({categories}) => {
  console.log(categories)
  return <Layout>{categories && <CategoryList categories={categories} />}</Layout>
}

CategoryList.propTypes = {
  categories: []
}

LandingPage.propTypes = {
  // categories: PropTypes.arrayOf({
  //   title: PropTypes.string,
  //   url: PropTypes.string,
  //   donateUrl: PropTypes.string,
  //   links: []
  // })
}

LandingPage.getInitialProps = async () => ({
  categories: await sanityClient.fetch(getCategories)
})

export default LandingPage
