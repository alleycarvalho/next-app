/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const nextConfig = {
  images: {
    assetPrefix: environment === 'production' ? '/next-app' : '',
    basePath: environment === 'production' ? '/next-app' : '',
    unoptimized: environment === 'production',
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.qrserver.com',
      },
      {
        protocol: 'https',
        hostname: 'alleycarvalho.github.io',
      },
    ],
  },
  output: environment === 'production' ? 'export' : 'standalone',
}

module.exports = nextConfig
