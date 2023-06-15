/** @type {import('next').NextConfig} */

const environment = process.env.NODE_ENV
const nextConfig = {
  assetPrefix: '/next-app/',
  basePath: '/next-app/',
  images: {
    assetPrefix: '/next-app/',
    basePath: '/next-app/',
    // assetPrefix: environment === 'production' ? '/next-app/' : '',
    // basePath: environment === 'production' ? '/next-app' : '',
    // trailingSlash: true,
    unoptimized: environment === 'production',
  },
  output: environment === 'production' ? 'export' : 'standalone',
}

module.exports = nextConfig
