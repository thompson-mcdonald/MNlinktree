import groq from 'groq'

export const getAllLinks = groq`*[_type == 'link']{
  'title': title,
  'url': url,
  'exteral': external
}`
