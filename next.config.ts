import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed "output: export" — Railway runs Next.js as a Node server
  // For GitHub Pages static export, re-add: output: "export"
  images: { unoptimized: true },
};

export default nextConfig;
