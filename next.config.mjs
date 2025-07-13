/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "tristannettles.com", // non-www
          },
        ],
        destination: "https://www.tristannettles.com/:path*",
        permanent: true,
      },

      // Redirect /defi to homepage
      {
        source: "/defi",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
