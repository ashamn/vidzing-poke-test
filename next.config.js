const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "raw.githubusercontent.com",
      "projectpokemon.org",
      "duiker101.github.io",
    ],
  },
};

module.exports = nextConfig;
