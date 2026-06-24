/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly set the project root to silence lockfile warnings
  outputFileTracingRoot: __dirname,
  async redirects() {
    return [
      {
        source: '/recepty',
        destination: '/kontakt?topic=recept',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
