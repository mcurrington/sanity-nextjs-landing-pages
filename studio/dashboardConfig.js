export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '625fee8fcf962e7c3271793d',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-11xrcoxf',
                  apiId: '1f4dfdec-d189-444a-baa2-6d8b4eac0a79'
                },
                {
                  buildHookId: '625fee8f3a5e3907b05d63f7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-pf2y2cgf',
                  apiId: '30d9f344-3a61-4613-8258-5d3e22ba2f25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mcurrington/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-pf2y2cgf.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
