// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Add needed imports for rendering LaTeX in Yarn
const math = require('remark-math');
const katex = require('rehype-katex');

const title = 'Flojoy';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flojoy',
  tagline: 'Joyful visual programming for Python.',
  url: 'https://docs.flojoy.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicons/favicon.png',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'flojoy-io', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // added LaTeX addins
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },

        theme: {
          customCss: [require.resolve('./src/scss/custom.scss')],
        },
      }),
    ],
  ],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Inter:wght@700&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap',
    // added LaTeX addins
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: ['docusaurus-plugin-sass'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        //title,
        logo: {
          alt: title,
          src: 'img/logo.png',
          srcDark: 'img/logo.png',
        },

        items: [         
          {
            href: '/getting-started/install',
            position: 'right',
            label: 'Download',
          },
          {
            href: '/nodes/ask-ai',
            position: 'right',
            label: 'Ask AI',
          },           
          {
            href: 'https://community.flojoy.io/',
            position: 'right',
            label: 'Community',
          },
          {
            href: 'https://github.com/flojoy-io/docs',
            position: 'right',
            label: 'Github',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      footer: {
        copyright: `Copyright ©${new Date().getFullYear()} ${title}, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '8F0URYIKW5',

        // Public API key: it is safe to commit it
        apiKey: '089cd76d3023464d056479e65880af90',

        indexName: 'Flojoy Docs',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },
    }),
};

module.exports = config;
