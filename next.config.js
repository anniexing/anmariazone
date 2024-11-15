const { hostname } = require("os");
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "dist",
  images: {
    remotePatterns: [{ hostname: "**.unsplash.com" }],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
