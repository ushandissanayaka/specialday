/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' and images unoptimized to allow Vercel to properly build and optimize the site.
  trailingSlash: true,
}
module.exports = nextConfig
