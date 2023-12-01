---
status: accepted
date: 2023-11-27
parent: Decisions
nav_order: 6
---

# Adopt best practices from Next.js Enterprise Boilerplate

## Context and Problem Statement

Due to the flexibility of react and Next.js, a lot of decisions are left to the developer.
As a mature framework, other developers have found best practices for working with Next.js that I can use.

## Decision Drivers

- I am new to the Next.js ecosystem

## Considered Options

- Use Next.js Enterprise Boilerplate
- Adapt Next.js Enterprise Boilerplate

## Decision Outcome

Chosen option: "Adapt Next.js Enterprise Boilerplate", because I do not need all of their features.

## Pros and Cons of the Options

### Use Next.js Enterprise Boilerplate

[Next.js Enterprise Boilerplate](https://github.com/Blazity/next-enterprise) is an open-source template for Next.js.

- Good, because it is complete
- Bad, because it contains features I will not use

### Adapt Next.js Enterprise Boilerplate

- Good, because I can use exactly what I need
- Bad, because adapting the project takes time

## More Information

The following are the features offered by the template, those with a check mark (✅) I will be using.

- ✅ Next.js with [App Router](https://nextjs.org/docs/app/building-your-application/routing#the-app-router)
- ✅ [CSS framework](https://tailwindcss.com/)
- ✅ [Linting](https://eslint.org/) and [formatting](https://prettier.io/)
- ✅ [`ts-reset`](https://github.com/total-typescript/ts-reset) for improved [type safety](https://www.typescriptlang.org/)
- ✅ [Bundle analyzer plugin](https://www.npmjs.com/package/@next/bundle-analyzer)
- ✅ [Unit](https://jestjs.io/), [integration](https://testing-library.com/react), and [e2e](https://playwright.dev/) tests
- [Storybook](https://storybook.js.org/) components
- [Conventional commits git hook](https://www.conventionalcommits.org/)
- [Open Telemetry](https://opentelemetry.io/) integration
- ✅ [Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
- [Health checks](https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/) for k8s
- [Radix UI](https://www.radix-ui.com/) components
- [CVA](http://cva.style/)
- ✅ [Auto-updating dependencies](https://www.whitesourcesoftware.com/free-developer-tools/renovate)
- [Patch-package](https://www.npmjs.com/package/patch-package)
- Components coupling and cohesion graph
- ✅ [GitHub Actions](https://github.com/features/actions)
- [Automated ChatGPT Code Reviews](https://openai.com/chatgpt)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
- ✅ [Environment variable management](https://env.t3.gg/)
