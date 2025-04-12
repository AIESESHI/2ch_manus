/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['secure.gravatar.com'],
  },
  // 必要に応じて環境変数を設定
  env: {
    SITE_NAME: '2ch風掲示板',
  },
};

module.exports = nextConfig;
