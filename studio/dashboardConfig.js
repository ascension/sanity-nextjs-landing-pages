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
                  buildHookId: '5f39ed7b98faa334e0585012',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-oqdy7oed',
                  apiId: 'dabdc9a4-e085-4878-a0d5-1d233947e1c7'
                },
                {
                  buildHookId: '5f39ed7b46997928b7135485',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-uhw6pxop',
                  apiId: '3fb19ff9-21ef-4343-a61e-d1828d68bb92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ascension/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-uhw6pxop.netlify.app', category: 'apps'}
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
