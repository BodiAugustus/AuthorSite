/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "tristannettles.com", // 👈 or swap if you prefer www-less domain
          },
        ],
        destination: "https://www.tristannettles.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
