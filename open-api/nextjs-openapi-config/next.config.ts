import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  /* config options here */

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*", // Intercept API calls
  //       destination: "https://api.reldyn.dev/indigo/:path*", // Redirect to backend
  //     },
  //   ];
  // },
};

export default nextConfig;
