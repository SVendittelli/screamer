import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
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
    VERCEL_ENV: z
      .enum(["development", "preview", "production"])
      .default("development"),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    BASE_URL: process.env.BASE_URL,
    CI: process.env.CI,
    EDGE_CONFIG: process.env.EDGE_CONFIG,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    VERCEL_ENV: process.env.VERCEL_ENV,
  },
});
