export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{type: 'reference', to: {type: 'link'}}]
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: Rule => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96
      }
    }
  ]
}
