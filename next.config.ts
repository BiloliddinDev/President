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
           "admin.presidentgift.com",
        ],
    },
};

module.exports = nextConfig;
