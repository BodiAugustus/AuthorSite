/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,

  async redirects() {
    return [
      // Optional: Keep this if you still want /defi to redirect to /
      {
        source: "/defi",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
