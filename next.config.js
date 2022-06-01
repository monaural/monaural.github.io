const withPlugins = require('next-compose-plugins')
const withExportImages = require('next-export-optimize-images')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins(
  [
    withExportImages,
    // your other plugins here
  ],
  nextConfig
)
