export default {
  name: 'link',
  title: 'Link',
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
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
      validation: Rule => Rule.required()
    }
  ]
}
