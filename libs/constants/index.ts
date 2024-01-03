import { env } from "@/env.mjs";

/**
 * The base URL of the application. This is used for generating absolute URLs.
 */
export const BASE_URL =
  env.VERCEL_ENV === "production"
    ? "https://halloween.vendittelli.co.uk"
    : env.VERCEL_URL;
