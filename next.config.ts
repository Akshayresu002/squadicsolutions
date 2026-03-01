import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
  } as any, // Bypass strict type check for newer experimental Next.js flags
};

export default nextConfig;
