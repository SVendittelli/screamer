import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    ADMINS: z.preprocess(
      (value) => (value && JSON.parse(value)) || [],
      z.array(z.string()),
    ),
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    CI: z
      .string()
      .optional()
      .transform((value) => !!value && value !== "false" && value !== "0"),
    DATABASE_URL: z.string(),
    EDGE_CONFIG: z.string().optional(),
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    SUPERTOKENS_API_KEY: z.string(),
    SUPERTOKENS_CONNECTION_URI: z.string(),
    VERCEL_ENV: z
      .enum(["development", "preview", "production"])
      .default("development"),
    VERCEL_GIT_COMMIT_SHA: z
      .string()
      .optional()
      .transform((sha) => sha || "local"),
    VERCEL_URL: z
      .string()
      .optional()
      .transform((url) => {
        if (!url) {
          return "http://localhost:3000";
        }
        // Ensure that the URL starts with https:// or http://
        return url.match(/^https?:\/\//) ? url : `https://${url}`;
      }),
  },
  client: {},
  runtimeEnv: {
    ADMINS: process.env.ADMINS,
    ANALYZE: process.env.ANALYZE,
    CI: process.env.CI,
    DATABASE_URL: process.env.DATABASE_URL,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
    NODE_ENV: process.env.NODE_ENV,
    SUPERTOKENS_API_KEY: process.env.SUPERTOKENS_API_KEY,
    SUPERTOKENS_CONNECTION_URI: process.env.SUPERTOKENS_CONNECTION_URI,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
    VERCEL_URL: process.env.VERCEL_URL,
  },
});
