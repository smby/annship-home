/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/annship-home',
  assetPrefix: '/annship-home/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
