/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    reactStrictMode: true,
    experimental: {
      appDir: true,
    },
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        port: "",
      },
    ],
  },
};
