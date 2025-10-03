import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	cleanDistDir: true,
	poweredByHeader: false,
	reactStrictMode: true,
	images: {
		formats: ["image/avif", "image/webp"],
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "**",
			},
		],
	},
};

export default nextConfig;
