---
status: accepted
date: 2023-11-27
parent: Decisions
nav_order: 4
---

# Use Next.js to build the site

## Context and Problem Statement

Screamer is going to be a website used by close friends.
It must be easy to build and adapt whilst being user friendly.
I want to use [react](https://react.dev/) for it to develop my react skills.

## Considered Options

- Create React App
- Nx
- Next.js
- Other react frameworks

## Decision Outcome

Chosen option: "Next.js", because it is a well supported learning opportunity.

## Pros and Cons of the Options

### Create React App

[Create React App (CRA)](https://create-react-app.dev/) is the most simple way to create a react application.

- Good, because it is simple and requires no configuration
- Good, because it is flexible
- Neutral, because it is officially supported
- Neutral, because I have used it before
- Bad, because I have to make more package choices
- Bad, because it doesn't provide a backend

### Nx

[Nx](https://nx.dev/) is a build system that comes with libraries for applications.

- Good, because it has powerful build caching
- Good, because it is flexible
- Good, because it is fullstack
- Neutral, because I have used it before
- Bad, because it is complex
- Bad, because it is designed for multi-project monorepos that share resources

### Next.js

[Next.js](https://nextjs.org/) is a build system that comes with libraries for applications.

- Good, because it is flexible, though less that the others
- Good, because it is fullstack
- Good, because I have not used it before
- Bad, because it is moderately complex
