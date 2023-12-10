// See for more: https://supertokens.com/docs/passwordless/appinfo

/**
 * Create the app information for SuperTokens.
 *
 * @param {string} domain The domain of the app
 * @returns The app info
 */
export const appInfo = (domain: string) => ({
  appName: "Screamer",
  apiDomain: domain,
  websiteDomain: domain,
  apiBasePath: "/api/auth",
  websiteBasePath: "/auth",
});
