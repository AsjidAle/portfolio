import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV !== "development" ? "export" : undefined,
  basePath: process.env.NODE_ENV !== "development" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV !== "development" ? "/portfolio/" : "",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "techakim.com",
        pathname: "/sam/tg/7268/li/imgs/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        pathname: "/dms/**"
      }
    ],
  },
};

export default nextConfig;
