/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the project root to silence lockfile warnings
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig
