// next.config.js
import {NextConfig} from "next";


const nextConfig = {
	output: 'standalone',
    webpack(config: NextConfig) {


        return config
    },
}

module.exports = nextConfig
