import { SessionContextType } from "supertokens-auth-react/recipe/session";

let doesSessionExist;
let roles;

export const useClaimValue = () => {
  return {
    loading: false,
    doesSessionExist,
    value: roles,
  };
};

export const useSessionContext = (): SessionContextType => ({
  loading: false,
  invalidClaims: [],
  doesSessionExist,
  userId: "userId",
  accessTokenPayload: {},
});

export function decorator(story, { parameters }) {
  roles = parameters?.session?.roles;
  doesSessionExist = parameters?.session?.doesSessionExist;
  return story();
}
