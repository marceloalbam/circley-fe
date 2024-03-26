/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@scope/shared',
  '@scope/prismic',
  '@scope/ui',
  '@scope/ssr',
])

const nextConfig = {
  async headers() {
      return [
          {
              // matching all API routes
              source: "/api/:path*",
              headers: [
                  { key: "Access-Control-Allow-Credentials", value: "true" },
                  { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
                  { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
                  { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                  { key: 'Cache-Control', value: 's-maxage=1, stale-while-revalidate=59' },
              ]
          }
      ]
  },
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 3600 * 24 * 30,
    domains: [
      process.env.NEXT_PUBLIC_MAGENTO_URI.split('//')[1],
      'images.prismic.io',
      'circley.local',
      'local-highhorse-be-staging.visiture.cloud',
      'local-tucker-be-staging.visiture.cloud',
    ],
  },
  experimental: {
    esmExternals: false,
  },
}

module.exports = withTM(nextConfig)
