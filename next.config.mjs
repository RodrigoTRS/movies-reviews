/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.watchmode.com',
            port: '',
          },
        ],
      },
};

export default nextConfig;
