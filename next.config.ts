import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. TURBOPACK AYARI (Geliştirme ortamı için)
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js', // Çıktının JavaScript dosyası olduğunu belirtiriz
      },
    },
  },

  // 2. WEBPACK AYARI (Production build için)
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;