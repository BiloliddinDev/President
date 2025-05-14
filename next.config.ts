// next.config.js
import {NextConfig} from "next";


const nextConfig = {
    webpack(config : NextConfig) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })


        return config
    },
}

module.exports = nextConfig
