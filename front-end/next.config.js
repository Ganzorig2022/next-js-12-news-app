/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['img.dummyapi.io'],
  },
  rewrites: async () => {
    return [
      {
        source: '/blogs',
        destination: '/',
      },
    ];
  },
};

module.exports = nextConfig;
