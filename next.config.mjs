import withBundleAnalyzer from "@next/bundle-analyzer";
import { env } from "./env.mjs";

const nextConfig = withBundleAnalyzer({ enabled: env.ANALYZE })({
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/view-source",
        destination: "https://github.com/SVendittelli/screamer",
        permanent: true,
      },
    ];
  },
});

export default nextConfig;
