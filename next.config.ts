import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: process.env.NODE_ENV !== "development" ? "export" : undefined,
  basePath: process.env.NODE_ENV !== "development" ? "/portfolio" : "",
  assetPrefix: process.env.NODE_ENV !== "development" ? "/portfolio/" : "",
};

export default nextConfig;
