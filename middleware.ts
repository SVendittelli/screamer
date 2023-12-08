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
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

export async function middleware(request: NextRequest) {
  /*
   * Generate a nonce for the CSP header

   * See also:
   * - https://web.dev/articles/strict-csp
   * - https://nextjs.org/docs/app/building-your-application/configuring/content-security-policy
   */
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
    script-src 'nonce-${nonce}' 'unsafe-inline' 'strict-dynamic' https: http:;
    object-src 'none';
    base-uri 'none';
    form-action 'self';
    frame-ancestors 'none';
  `;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  // Set the nonce in the request headers so it can be read in server components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  const response = await resolveNextResponse(request, requestHeaders);

  if (env.VERCEL_ENV !== "development") {
    // Set the CSP header in the response
    response.headers.set(
      "Content-Security-Policy",
      contentSecurityPolicyHeaderValue,
    );
  }

  return response;
}

async function resolveNextResponse(request: NextRequest, headers: Headers) {
  const response = NextResponse.next({ request: { headers } });

  if (!env.EDGE_CONFIG || !env.VERCEL_ENV) {
    // If the environment variables are not defined, log an error and continue
    console.error(
      "Missing environment variables for feature flags, both should be defined:",
      {
        EDGE_CONFIG: !!env.EDGE_CONFIG,
        VERCEL_ENV: !!env.VERCEL_ENV,
      },
    );
    return response;
  }

  try {
    // Check whether the maintenance page should be shown
    const flags = await get<FeatureFlag>(env.VERCEL_ENV);

    // If it is in maintenance mode, point the url pathname to the maintenance page
    if (flags?.maintenance) {
      request.nextUrl.pathname = `/maintenance`;

      // Rewrite to the url
      return NextResponse.rewrite(request.nextUrl, { request: { headers } });
    }

    // If it is not in maintenance mode, but the user is trying to access the maintenance page, redirect to home page
    if (request.nextUrl.pathname === "/maintenance") {
      // Redirect to home page
      return NextResponse.redirect(new URL("/", request.url));
    }
  } catch (error) {
    console.error(error);
  }

  return response;
}
