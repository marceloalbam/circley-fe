/** @type {import('next').NextConfig}  */
const withTM = require('next-transpile-modules')([
  '@scope/shared',
  '@scope/prismic',
  '@scope/ui',
  '@scope/ssr',
])

const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 3600 * 24 * 30,
    domains: [
      process.env.NEXT_PUBLIC_MAGENTO_URI.split('//')[1],
      'images.prismic.io',
      'local-circy-be-staging.visiture.cloud',
    ],
  },
  experimental: {
    esmExternals: false,
  },
}

module.exports = withTM(nextConfig)
