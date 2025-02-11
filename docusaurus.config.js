// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'StarkNet Docs',
  url: 'https://docs.starknet.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'starkware-libs', // Usually your GitHub org/user name.
  projectName: 'starknet-docs', // Usually your repo name.
  deploymentBranch: 'deployed',

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous'
    }
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'StarkNet',
        logo: {
          alt: 'StarkWare Logo',
          src: 'img/logo.svg',
          href: 'https://starknet.io'
        },
        items: [
          {
            position: 'left',
            label: 'Technical Documentation',
            to: '/'
          },
          {
            href: 'https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starknet',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Intro',
                to: '/docs/intro'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'StarkNet Shamans',
                href: 'https://community.starknet.io/'
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/uJ9HZTUk2Y'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/StarkWareLtd'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} StarkWare Industries. Built with Docusaurus.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell', 'bash', 'python']
      },
      algolia: {
        appId: 'AUAGSTLC17',
        apiKey: 'da23a50c70f3629f310f44535a015f9f',
        indexName: 'starknet',
        searchParameters: {}
      }
    })
};

module.exports = config;
