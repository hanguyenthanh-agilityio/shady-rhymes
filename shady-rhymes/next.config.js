/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true
  },

  images: {
    domains: ['']
  }
};

module.exports = nextConfig;
