import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    // Remote image sources we will use across phases.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com" }, // Shopify product media
      { protocol: "https", hostname: "cdn.sanity.io" }, // Sanity editorial media
      { protocol: "https", hostname: "images.unsplash.com" }, // placeholder imagery (mock phase)
    ],
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
