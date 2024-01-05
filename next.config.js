/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'docs.paperless-ngx.com',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
};

module.exports = nextConfig;
