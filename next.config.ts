import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["temp.maretyui.com"],
  turbopack: { root: __dirname },
};

export default nextConfig;
