/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: "./",
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
