/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "providermap.tech",
          },
        ],
        destination: "https://www.providermap.tech/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
