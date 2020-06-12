import groq from 'groq'

export const getAllLinks = groq`*[_type == 'link'] | order(title) {
  'title': title,
  'url': url,
  'donateUrl': donateUrl,
  'category': category->
}`

export const getAllLinksByCategory = groq`*[_type == 'link' && category == $category]{
  'links': links[]->{
    title,
    url,
    donateUrl
  },
}`

export const getAllLinksByCategoryAndCountry = groq`*[_type == 'link' && category == $category && country == $country]{
  'links': links[]->{
    title,
    url,
    donateUrl
  },
}`

export const getAllCategories = groq`*[_type == 'category'] | order(title) {
  'title': title,
  'description': description,
  'links': links[]->{
    title,
    url,
    donateUrl,
    'country': country->location
  },

}`
