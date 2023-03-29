import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrism from '@mapbox/rehype-prism'
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  basePath,
  assetPrefix: `${basePath}/`,
  experimental: {
    scrollRestoration: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);

