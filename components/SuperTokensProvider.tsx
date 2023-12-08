"use client";

import { frontendConfig, setRouter } from "@/config/frontend";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import SuperTokensReact, { SuperTokensWrapper } from "supertokens-auth-react";

if (typeof window !== "undefined") {
  // we only want to call this init function on the frontend, so we check typeof window !== 'undefined'
  SuperTokensReact.init(frontendConfig());
}

/**
 * Configure the frontend auth with the router and pathname.
 */
export const SuperTokensProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  setRouter(useRouter(), usePathname() || window.location.pathname);

  return <SuperTokensWrapper>{children}</SuperTokensWrapper>;
};
