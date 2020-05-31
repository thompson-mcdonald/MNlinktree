import groq from 'groq'

export const getAllLinks = groq`*[_type == 'link']{
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

export const getCategories = groq`*[_type == 'category']{
  'title': title,
  'description': description,
  'links': links->
}`
