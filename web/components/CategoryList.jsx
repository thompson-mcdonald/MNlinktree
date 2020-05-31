import React from 'react'

// eslint-disable-next-line react/prop-types
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

export default CategoryList
