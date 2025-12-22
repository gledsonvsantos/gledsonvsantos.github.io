import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repo = 'portfolio'; // <-- troque pelo nome do seu repo

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
};

export default nextConfig;
