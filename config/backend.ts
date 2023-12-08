import { appInfo } from "@/config/appInfo";
import { env } from "@/env.mjs";
import SuperTokens from "supertokens-node";
import Passwordless from "supertokens-node/recipe/passwordless";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";

export const backendConfig = (): TypeInput => {
  return {
    framework: "custom",
    supertokens: {
      connectionURI: env.SUPERTOKENS_CONNECTION_URI,
      apiKey: env.SUPERTOKENS_API_KEY,
    },
    appInfo: appInfo(env.VERCEL_URL),
    recipeList: [
      Passwordless.init({
        flowType: "MAGIC_LINK",
        contactMethod: "EMAIL_OR_PHONE",
      }),
      Session.init(), // initializes session features
    ],
    isInServerlessEnv: true,
  };
};

let initialized = false;

/**
 * Ensure SuperTokens is initialised.
 */
export function ensureSuperTokensInit() {
  if (!initialized) {
    SuperTokens.init(backendConfig());
    initialized = true;
  }
}
