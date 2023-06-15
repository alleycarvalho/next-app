/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const nextConfig = {
  images: {
    assetPrefix: environment === 'production' ? '/next-app/' : '',
    basePath: environment === 'production' ? '/next-app' : '',
    trailingSlash: true,
    unoptimized: environment === 'production',
  },
  output: environment === 'production' ? 'export' : 'standalone',
}

module.exports = nextConfig
