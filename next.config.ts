/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    output: 'standalone',
    images: {
        domains: [
            "www.facebook.com",
            "mc.yandex.ru",
        ],
    },
};

module.exports = nextConfig;
