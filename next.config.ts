import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "hrn1u3ev9nszbymr.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
