import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio", // ✅ Fix GitHub Pages path issue
  assetPrefix: "/portfolio/", // ✅ Ensures assets load correctly
};

export default nextConfig;
