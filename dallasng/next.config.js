/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	reactStrictMode: true,
	redirects: [
		{
			source: '/about',
			destination: '/',
			permanent: true
		}
	]
};

module.exports = nextConfig;
