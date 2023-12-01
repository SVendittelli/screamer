---
status: accepted
date: 2023-11-27
parent: Decisions
nav_order: 5
---

# Host Screamer on Vercel

## Context and Problem Statement

Screamer needs to be hosted on the public internet so users can access it.

## Considered Options

- Private kubernetes instance
- GitHub Pages
- Vercel
- Other hosting providers

## Decision Outcome

Chosen option: "Vercel", because it integrates well with [ADR-0004 Use Next.js](./0004-build-with-nextjs.md) and [ADR-0002 Use GitHub](./0002-use-github.md).

## Pros and Cons of the Options

### Private kubernetes instance

I operate a private kubernetes instance to host arbitrary software.

- Good, because very flexible
- Good, because it is already set up
- Good, because I can use infrastructure as code
- Bad, because it requires a lot more configuration to host a website
- Bad, because it is expensive

### GitHub Pages

- Good, because it is easy to configure
- Bad, because it can only host static sites
- Bad, because it can not host the backend

### Vercel

- Good, because it integrates well is Next.js and GitHub
- It serves the UI and backend close to the user
