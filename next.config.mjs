import withBundleAnalyzer from "@next/bundle-analyzer";
import { env } from "./env.mjs";

const nextConfig = withBundleAnalyzer({ enabled: env.ANALYZE })({});

export default nextConfig;
