---
status: accepted
date: 2023-12-01
parent: Decisions
nav_order: 10
---

# Use Vercel Edge Config for feature flags

## Context and Problem Statement

I want a way for users to test features before they are fully completed.
I also want to be able to toggle some features on for users without a redeploy.
Feature flags are a common solution to both of these problems.

## Considered Options

- LaunchDarkly
- HappyKit Flags
- Vercel Edge Config

## Decision Outcome

Chosen option: "Vercel Edge Config", because it is free and does everything I need it to.

## Pros and Cons of the Options

### LaunchDarkly

[LaunchDarkly](https://launchdarkly.com/) is a feature flag management platform.

- Good, because it is feature rich
- Good, because it is a large, well supported project
- Good, because it is well liked by the community
- Bad, because it is expensive

### HappyKit Flags

[HappyKit Flags](https://github.com/happykit/flags) is a feature flag management platform for Next.js.

- Good, because it has a generous free tier
- Good, because it is designed to work with Next.js as selected in [ADR-0004](./0004-build-with-nextjs.md)
- Bad, because it is a small project

### Vercel Edge Config

[Vercel Edge Config](https://vercel.com/docs/storage/edge-config) is a global data store that enables experimentation with feature flags, A/B testing, critical redirects, and more.

- Good, because it is free
- Good, because it is fast
- Bad, because I need to manage it myself

## More Information

[Example app](https://vercel.com/templates/next.js/feature-flag-apple-store).
