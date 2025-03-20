import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["a.storyblok.com"],
  },
  webpack(config) {
    // Adding rule for handling .svg imports as React components using @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

export default nextConfig;
