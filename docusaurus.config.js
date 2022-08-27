// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const title = 'Flojoy';

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'FLOJOY',
	tagline:
		'Joyful visual programming for Python.',
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
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//   editUrl:
					//     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				// blog: {
				//   showReadingTime: true,
				//   // Please change this to your repo.
				//   // Remove this to remove the "edit this page" links.
				//   editUrl:
				//     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				// },
				theme: {
					customCss: [require.resolve('./src/scss/custom.scss')],
				},
			}),
		],
	],
	stylesheets: [
		'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Inter:wght@700&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
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
					src: 'img/logo-horizontal-dark.svg',
					srcDark: 'img/logo-horizontal-light.svg',
				},

				items: [
					{
						type: 'doc',
						docId: 'getting-started',
						position: 'right',
						label: 'Documentation',
					},
					// { to: "/blog", label: "Blog", position: "left" },
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
				// links: [
				// 	{
				// 		title: 'Docs',
				// 		items: [
				// 			{
				// 				label: 'Tutorial',
				// 				to: '/docs/intro',
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: 'Community',
				// 		items: [
				// 			// {
				// 			// 	label: 'Stack Overflow',
				// 			// 	href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				// 			// },
				// 			// {
				// 			// 	label: 'Discord',
				// 			// 	href: 'https://discordapp.com/invite/docusaurus',
				// 			// },
				// 			{
				// 				label: 'Twitter',
				// 				href: 'https://twitter.com/flojoy',
				// 			},
				// 		],
				// 	},
				// 	// {
				// 	// 	title: 'More',
				// 	// 	items: [
				// 	// 		{
				// 	// 			label: 'Blog',
				// 	// 			to: '/blog',
				// 	// 		},
				// 	// 		{
				// 	// 			label: 'GitHub',
				// 	// 			href: 'https://github.com/facebook/docusaurus',
				// 	// 		},
				// 	// 	],
				// 	// },
				// ],
				copyright: `Copyright ©${new Date().getFullYear()} ${title}, Inc.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
