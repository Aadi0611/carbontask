import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Enables SWC support for styled-components
  },
};

export default nextConfig;



