/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV;

const nextConfig = {
    images: { unoptimized: true },
    basePath: '/CFGxPOP',
    output: 'export',
};

export default nextConfig;
