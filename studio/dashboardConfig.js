export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed386cad52d63a65fecbc62',
                  title: 'Sanity Studio',
                  name: 'MNlinktree-studio',
                  apiId: '5756ffb6-b357-4dba-a74a-37f35472edbc'
                },
                {
                  buildHookId: '5ed386ca1c8448f965327994',
                  title: 'Landing pages Website',
                  name: 'MNlinktree',
                  apiId: '44175d9b-48cf-4d8a-bff6-4ab0f43efb92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/thompson-mcdonald/MNlinktree',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://MNlinktree.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
