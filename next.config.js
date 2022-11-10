/** @type {import('next').NextConfig} */
const withVideos = require("next-videos");
const nextConfig = {
  reactStrictMode: true,
};

const fsConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
module.exports = fsConfig;
module.exports = nextConfig;
module.exports = withVideos();
