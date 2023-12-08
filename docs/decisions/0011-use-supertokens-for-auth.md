---
status: accepted
date: 2023-12-08
parent: Decisions
nav_order: 11
---

# Use SuperTokens for authentication and authorisation

## Context and Problem Statement

To protect the API endpoints, I need an auth mechanism.

<!-- This is an optional element. Feel free to remove. -->

## Decision Drivers

- It must be free

## Considered Options

- SuperTokens
- Auth0
- Keycloak

## Decision Outcome

Chosen option: "SuperTokens", because it is free and easy to integrate with.

## Pros and Cons of the Options

### SuperTokens

[SuperTokens](https://supertokens.com/).

- Good, because it is free
- Good, because it is easy to integrate
- Good, because it is open source
- Good, because it is a managed service
- Good, because it can handle passwordless and social logins
- Bad, because it is a start up

### Auth0

[Auth0](https://auth0.com/).

- Good, because it has a Next.js integration
- Good, because it is a managed service
- Good, because it can handle passwordless and social logins
- Bad, because it can get expensive quickly
- Bad, because it is closed source
- Bad, because it has suffered recent data breaches

### Keycloak

[Keycloak](https://www.keycloak.org/).

- Good, because it is free
- Good, because it is open source
- Good, because it can handle passwordless (partial) and social logins
- Bad, because it is not a managed service
- Bad, because it is complicated to integrate

## More Information

- [Integrating SuperTokens with a Next.js app](https://supertokens.com/docs/passwordless/nextjs/app-directory/about)
- [Disable public sign ups](https://supertokens.com/docs/passwordless/common-customizations/disable-sign-up/overview)
