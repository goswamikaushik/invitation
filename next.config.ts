import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dcwckzrntxzqfshnemgj.supabase.co",
        pathname: "/storage/v1/object/public/invitation_images/**",
      },
    ],
  },
};

export default nextConfig;
