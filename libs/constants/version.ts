import { env } from "@/env.mjs";
import packageJson from "@/package.json";

/** The git hash of the current revision. */
export const sha = env.VERCEL_GIT_COMMIT_SHA;

/** The current version of screamer. */
export const version = packageJson.version;
