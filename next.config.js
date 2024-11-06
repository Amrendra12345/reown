/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    },
    rewrites: async ()=>{
        return [
            {
                source: '/sell-:device',
                destination: '/sell-device/:device'
            },
            {
                source: '/sell-:device/:brand',
                destination: '/sell-device/:device/:brand'
            },
            {
                source: '/sell-:device/:brand/:model',
                destination: '/sell-device/:device/:brand/:model'
            }
        ];
    },
    images:{
        remotePatterns: [
            {
                hostname: "**",
            },
        ],
    }
}
module.exports = nextConfig
