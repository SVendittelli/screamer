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
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    PORT: z.coerce.number().default(3000),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    BASE_URL: process.env.BASE_URL,
    CI: process.env.CI,
    PORT: process.env.PORT,
  },
});
