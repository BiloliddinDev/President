/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.facebook.com',
            },
            {
                protocol: 'https',
                hostname: 'mc.yandex.ru',
            },
            {
                protocol: 'https',
                hostname: 'admin.presidentgift.com',
            },
        ],
    },
    // Performance optimizations
    poweredByHeader: false,
    compress: true,
    // Compiler options for production
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    // Reduce memory usage
    experimental: {
        optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-dialog'],
    },
};

module.exports = nextConfig;
