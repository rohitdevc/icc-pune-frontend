import type { NextConfig } from "next";

const isNetlifyDomain = process.env.URL?.includes("netlify.app");

const nextConfig: NextConfig = {
  output: 'standalone',

	allowedDevOrigins: ['192.168.0.196'],
	
	basePath: process.env.BASEPATH_PREFIX === "/" ? "" : process.env.BASEPATH_PREFIX,
	
	assetPrefix: process.env.ASSET_PREFIX === "/" ? "" : process.env.ASSET_PREFIX,
  
 	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'iccpune.org',
				port: '',
				pathname: '/**'
			}
		]
	},

  async headers() {
		const headers = [];
		
		if (isNetlifyDomain) {
			headers.push({
				source: "/(.*)",
				headers: [
					{
						key: "X-Robots-Tag",
						value: "noindex, nofollow"
					},
				],
			});
		}

		return headers;
	},

  async redirects() {
		return [
			{
				source: "/gallery",
				destination: "/",
				permanent: true,
			}
		];
	},

  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
