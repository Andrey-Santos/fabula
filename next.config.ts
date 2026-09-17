import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Os placeholders de produto são SVG locais; trocar por JPG/WebP reais depois.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
