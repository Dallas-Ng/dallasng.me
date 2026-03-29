/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	redirects: async () => [
		{
			source: '/about/',
			destination: '/',
			permanent: true
		}
	],
	headers: async () => [
		{
			source: '/tracker.html',
			headers: [
				{ key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, max-age=0' },
				{ key: 'Pragma', value: 'no-cache' },
				{ key: 'Expires', value: '0' }
			]
		}
	]
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
