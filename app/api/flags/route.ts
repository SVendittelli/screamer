import { get } from "@vercel/edge-config";
import { NextResponse } from "next/server";
import { env } from "@/env.mjs";
import FeatureFlags from "@/types/FeatureFlags";

export const runtime = "edge";

export async function GET() {
  if (!env.EDGE_CONFIG || !env.VERCEL_ENV) {
    console.error(
      "Missing environment variables for feature flags, both should be defined:",
      {
        EDGE_CONFIG: !!env.EDGE_CONFIG,
        VERCEL_ENV: !!env.VERCEL_ENV,
      },
    );
  }

  const flags = await get<FeatureFlags>(env.VERCEL_ENV);

  if (!flags) {
    console.error("Missing feature flag configuration");
    return NextResponse.json(
      { message: "Missing feature flag configuration" },
      { status: 500 },
    );
  }

  return NextResponse.json(flags);
}
