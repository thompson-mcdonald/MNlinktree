export default {
  name: 'country',
  title: 'Country',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'reference', to: {type: 'link'}}]
    }
  ]
}
