import withBundleAnalyzer from "@next/bundle-analyzer";
import { env } from "./env.mjs";

const nextConfig = withBundleAnalyzer({ enabled: env.ANALYZE })({
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Permissions-Policy",
            value:
              "camera=(), display-capture=(), geolocation=(), microphone=()",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "m.media-amazon.com" }],
  },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "https://svendittelli.github.io/screamer/",
        permanent: false,
      },
      {
        source: "/license",
        destination:
          "https://github.com/SVendittelli/screamer/blob/main/LICENSE",
        permanent: true,
      },
      {
        source: "/view-source",
        destination: "https://github.com/SVendittelli/screamer",
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
