import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    ADMINS: z.preprocess(
      (value) => JSON.parse(value) || [],
      z.array(z.string()),
    ),
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    BASE_URL: z.string().optional(),
    CI: z
      .string()
      .optional()
      .transform((value) => !!value && value !== "false" && value !== "0"),
    EDGE_CONFIG: z.string().optional(),
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
    PORT: z.coerce.number().default(3000),
    SUPERTOKENS_API_KEY: z.string(),
    SUPERTOKENS_CONNECTION_URI: z.string(),
    VERCEL_ENV: z
      .enum(["development", "preview", "production"])
      .default("development"),
    VERCEL_URL: z
      .string()
      .optional()
      .transform((val) => val || "http://localhost:3000"),
  },
  client: {},
  runtimeEnv: {
    ADMINS: process.env.ADMINS,
    ANALYZE: process.env.ANALYZE,
    BASE_URL: process.env.BASE_URL,
    CI: process.env.CI,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    SUPERTOKENS_API_KEY: process.env.SUPERTOKENS_API_KEY,
    SUPERTOKENS_CONNECTION_URI: process.env.SUPERTOKENS_CONNECTION_URI,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
  },
});
