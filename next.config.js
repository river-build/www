// https://github.com/vercel/geist-font/issues/13
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['geist'],
}
