// next.config.js
import {NextConfig} from "next";


const nextConfig = {
    webpack(config: NextConfig) {

       module.exports = {
           experimental: {
               optimizeCss: false,
               unoptimized: true,
           },
       }
        
        return config
    },
}

module.exports = nextConfig
