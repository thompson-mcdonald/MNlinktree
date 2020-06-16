export default {
  name: 'yemen',
  title: 'Yemen',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string'
    },
    {
      name: 'donateUrl',
      title: 'Donate URL',
      type: 'string'
    }
  ]
}
