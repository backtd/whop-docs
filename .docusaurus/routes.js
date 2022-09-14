import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ee5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '387'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '1e6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '53c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '7fb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'bb3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '7cf'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '4d0'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '344'),
    routes: [
      {
        path: '/docs/advanced/admin',
        component: ComponentCreator('/docs/advanced/admin', '51b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/congratulations',
        component: ComponentCreator('/docs/advanced/congratulations', 'bcd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/entry-point',
        component: ComponentCreator('/docs/advanced/entry-point', '32d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/folder-structure',
        component: ComponentCreator('/docs/advanced/folder-structure', 'b99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/modal',
        component: ComponentCreator('/docs/advanced/modal', 'bde'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/passport',
        component: ComponentCreator('/docs/advanced/passport', 'e15'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/routes',
        component: ComponentCreator('/docs/advanced/routes', '5c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/setup',
        component: ComponentCreator('/docs/advanced/setup', 'a2a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/views',
        component: ComponentCreator('/docs/advanced/views', 'abe'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/advanced/whop',
        component: ComponentCreator('/docs/advanced/whop', '570'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
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
        path: '/docs/category/advanced-guide',
        component: ComponentCreator('/docs/category/advanced-guide', 'db8'),
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
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
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
