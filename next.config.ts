import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.29.47"],
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default nextConfig;
