/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
    contentDispositionType: 'inline',
  },
  async rewrites() {
    return [
      {
        source: '/media/:path*',
        destination: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/:path*`,
      },
    ];
  },
};

export default nextConfig;
