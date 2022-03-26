/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer');

const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	redirects: () => [
		{
			source: '/about/',
			destination: '/',
			permanent: true
		}
	]
};

module.exports = withBundleAnalyzer(nextConfig);
