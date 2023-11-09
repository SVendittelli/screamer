import withBundleAnalyzer from "@next/bundle-analyzer";
import { env } from "./env.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({ enabled: env.ANALYZE });

export default nextConfig;
