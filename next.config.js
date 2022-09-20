/** @type {import('next').NextConfig} */
const withSvgr = require("next-svgr");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = withSvgr(nextConfig);
