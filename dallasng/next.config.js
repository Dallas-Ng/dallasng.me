/** @type {import('next').NextConfig} */
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

module.exports = nextConfig;
