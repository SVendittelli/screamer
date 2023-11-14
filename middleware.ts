import { FeatureFlag } from "@/app/lib/flags";
import { env } from "@/env.mjs";
import { get } from "@vercel/edge-config";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - maintenance (maintenance page)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|maintenance).*)",
  ],
};

export async function middleware(req: NextRequest) {
  if (!env.EDGE_CONFIG || !env.VERCEL_ENV) {
    // If the environment variables are not defined, log an error and continue
    console.error(
      "Missing environment variables for feature flags, both should be defined:",
      {
        EDGE_CONFIG: !!env.EDGE_CONFIG,
        VERCEL_ENV: !!env.VERCEL_ENV,
      },
    );
    return NextResponse.next();
  }

  try {
    // Check whether the maintenance page should be shown
    const flags = await get<FeatureFlag>(env.VERCEL_ENV);

    // If is in maintenance mode, point the url pathname to the maintenance page
    if (flags?.maintenance) {
      req.nextUrl.pathname = `/maintenance`;

      // Rewrite to the url
      return NextResponse.rewrite(req.nextUrl);
    }
  } catch (error) {
    console.error(error);
  }
}
