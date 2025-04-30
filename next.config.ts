/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // The basePath should match your repository name
  basePath: '/finance-tracker',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
