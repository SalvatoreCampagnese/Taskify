/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/onboarding",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
