import SuperTokens, { User } from "supertokens-node";
import Dashboard from "supertokens-node/recipe/dashboard";
import Passwordless, {
  APIInterface,
} from "supertokens-node/recipe/passwordless";
import Session from "supertokens-node/recipe/session";
import UserRoles from "supertokens-node/recipe/userroles";
import { TypeInput } from "supertokens-node/types";
import { appInfo } from "@/config/appInfo";
import { env } from "@/env.mjs";
import { BASE_URL } from "@/libs/constants";

export const backendConfig = (): TypeInput => {
  return {
    framework: "custom",
    supertokens: {
      connectionURI: env.SUPERTOKENS_CONNECTION_URI,
      apiKey: env.SUPERTOKENS_API_KEY,
    },
    appInfo: appInfo(BASE_URL),
    recipeList: [
      Dashboard.init({ admins: env.ADMINS }),
      Passwordless.init({
        flowType: "MAGIC_LINK",
        contactMethod: "EMAIL_OR_PHONE",
        // Disable sign up, make screamer invite only
        override: {
          apis: (originalImplementation) => ({
            ...originalImplementation,
            createCodePOST: overrideCreateCodePOST(originalImplementation),
          }),
        },
      }),
      Session.init(),
      UserRoles.init(),
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

/**
 * Override the default `createCodePOST` implementation to disable sign up.
 * @param input - Contains either an email address or phone number
 */
const overrideCreateCodePOST =
  (originalImplementation: APIInterface): APIInterface["createCodePOST"] =>
  async (input) => {
    const existingUsers = await SuperTokens.listUsersByAccountInfo(
      input.tenantId,
      {
        ...("email" in input && { email: input.email }),
        ...("phoneNumber" in input && { phoneNumber: input.phoneNumber }),
      },
    );

    let existingPasswordlessUser = existingUsers.find(
      (user) =>
        user.loginMethods.find((loginMethod) =>
          hasSameLoginMethod(loginMethod, input),
        ) !== undefined,
    );

    if (existingPasswordlessUser === undefined) {
      // this is the sign up attempt
      return {
        status: "GENERAL_ERROR",
        message:
          "This is a private site. Please contact the site owner to sign up.",
      };
    }
    return await originalImplementation.createCodePOST!(input);
  };

/**
 * Check if the user has the same login method as the input.
 * @param loginMethod - The login method of the user
 * @param input - Contains either an email address or phone number
 * @returns Whether the user has the same login method as the input
 */
function hasSameLoginMethod(
  loginMethod: User["loginMethods"][0],
  input: { email: string } | { phoneNumber: string },
) {
  if (loginMethod.recipeId !== "passwordless") {
    return false;
  }
  if ("email" in input) {
    return loginMethod.hasSameEmailAs(input.email);
  } else {
    return loginMethod.hasSamePhoneNumberAs(input.phoneNumber);
  }
}
