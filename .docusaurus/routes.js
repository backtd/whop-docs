import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4d0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '8f1'),
    routes: [
      {
        path: '/docs/authorization-difference',
        component: ComponentCreator('/docs/authorization-difference', '570'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/beginner/congratulations',
        component: ComponentCreator('/docs/beginner/congratulations', '01e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/beginner/enviroment-setup',
        component: ComponentCreator('/docs/beginner/enviroment-setup', '811'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/beginner/license-metadata',
        component: ComponentCreator('/docs/beginner/license-metadata', '0ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/beginner/license-object',
        component: ComponentCreator('/docs/beginner/license-object', '7de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/beginner/validating-the-license-key',
        component: ComponentCreator('/docs/beginner/validating-the-license-key', 'f2c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/beginners-guide',
        component: ComponentCreator('/docs/category/beginners-guide', '1ed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/tutorial---extras',
        component: ComponentCreator('/docs/category/tutorial---extras', 'f09'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'fdd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '2d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '0c0'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
