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
  tagline: 'No-code flowchart programming for scientific Python.',
  url: 'https://docs.flojoy.ai',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicons/favicon.png',
  trailingSlash: true,
  staticDirectories: ['static'],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'flojoy-ai', // Usually your GitHub org/user name.
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
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            const flattenNodes = item => {
              if (!item.items || item.items.length === 0) {
                return item;
              }

              // Check if the item is a node, i.e it has an examples
              // or appendix section. If so, don't display it as a category
              // and instead make it a leaf.
              const filtered = item.items.filter(
                x => x.label !== 'examples' && x.label !== 'appendix',
              );

              if (filtered.length === 0 && item.link) {
                return {
                  type: 'doc',
                  id: item.link.id,
                };
              }

              return {
                ...item,
                items: filtered.map(flattenNodes),
              };
            };
            return sidebarItems.map(flattenNodes);
          },
          // added LaTeX addins
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },

        theme: {
          customCss: [
            require.resolve('./src/scss/custom.scss'),
            require.resolve('./src/css/custom.css'),
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
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
  plugins: [
    'docusaurus-plugin-sass',
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/instruments-database/all-instruments/',
            from: '/instruments-database',
          },
        ],
      },
    ],
    require.resolve('docusaurus-plugin-fathom'),
  ],
  // themes: ['@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          '❗Announcement❗ This site has been migrated to <a target="_blank" rel="noopener noreferrer" href="https://docs.flojoy.ai">docs.flojoy.ai</a> to enhance your documentation experience!',
        backgroundColor: '#000',
        textColor: '#FFF',
        isCloseable: true,
      },
      metadata: [
        {
          name: 'google-site-verification',
          content: 'vnTrpT2hj2y0bAD5_FltptHs2oDPgwU5N4amWmA1DbE',
        },
      ],
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
            type: 'dropdown',
            label: 'Resources',
            position: 'right',
            items: [
              // {
              //   href: '/getting-started/install',
              //   label: 'Installation',
              // },
              // {
              //   href: '/nodes',
              //   label: 'All nodes',
              // },
              // {
              //   href: '/custom-nodes/',
              //   label: 'Contributing',
              // },
              {
                href: '/instruments-database/all-instruments',
                label: 'Instruments Database',
              },
            ],
          },
          {
            type: 'dropdown',
            label: 'Connect',
            position: 'right',
            items: [
              {
                href: 'https://github.com/flojoy-io/docs',
                label: 'GitHub',
              },
              {
                href: 'https://community.flojoy.io/',
                label: 'Community',
              },
            ],
          },
          {
            href: 'https://www.flojoy.ai/contact-sales',
            label: 'Contact Sales',
            position: 'right',
          },
        ],
      },
      footer: {
        copyright: `Copyright ©${new Date().getFullYear()} ${title}, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['matlab'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'JW330EK7K6',

        // Public API key: it is safe to commit it
        apiKey: '7eab408fbb0770ffd58b42a8392f3676',

        indexName: 'flojoy_docs_prod',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
      },

      fathomAnalytics: {
        siteId: 'LCCRNAEW',
      },
    }),
};

module.exports = config;
