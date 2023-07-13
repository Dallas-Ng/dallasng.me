/** @type {import('next').NextConfig} */
// const withBundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en'
	},
	redirects: () => [
		{
			source: '/about/',
			destination: '/',
			permanent: true
		}
	]
};

// module.exports = withBundleAnalyzer(nextConfig);
module.exports = nextConfig;
