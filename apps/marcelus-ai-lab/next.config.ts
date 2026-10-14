import type { NextConfig } from 'next';

const config: NextConfig = {
  output: 'export',
  trailingSlash: true,
  devIndicators: false,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  turbopack: { root: process.cwd() },
};

export default config;
