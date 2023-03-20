const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    nextScriptWorkers: true
  },

  images: {
    domains: ['cdn.pixabay.com'],
    deviceSizes: [375, 768, 1024, 1440, 1920], // Breakpoint
    minimumCacheTTL: 60 //configure the Time to Live (TTL) in seconds for cached optimized images.
  },

  resolve: {
    alias: [
      {
        find: '@/',
        replacement: path.resolve(__dirname, './')
      }
    ]
  }
};

module.exports = nextConfig;
