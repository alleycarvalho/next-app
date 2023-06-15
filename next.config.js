/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const nextConfig = {
  assetPrefix: environment === 'production' ? '/next-app/' : '',
  basePath: environment === 'production' ? '/next-app' : '',
  images: {
    unoptimized: environment === 'production',
  },
  output: environment === 'production' ? 'export' : 'standalone',
  trailingSlash: true,
}

module.exports = nextConfig
