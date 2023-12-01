---
status: accepted
date: 2023-11-29
parent: Decisions
nav_order: 8
---

# Use Prisma ORM for database connectivity

## Context and Problem Statement

As a full-stack application that needs a persistence layer, I need a way of managing data models and database connectivity.

## Decision Drivers

- I need something type-safe
- I need it to be able to connect to whatever storage layer I choose

## Considered Options

- Prisma
- Direct DB connections

## Decision Outcome

Chosen option: "Prisma", because it can connect to whatever database I choose.

## Pros and Cons of the Options

### Prisma

[Prisma](https://www.prisma.io/) is an open source [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping). It consists of three parts:

1. Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript
2. Prisma Migrate: Migration system
3. Prisma Studio: GUI to view and edit data in your database.

- Good, because it generates the TypeScript types I'll need
- Good, because it can automatically migrate my data when the model changes
- Neutral, because it has a GUI

### Direct DB connections

Directly connection to whatever database I settle on.

- Good, because it is a smaller dependency
- Good, because it doesn't limit my database choice
- Bad, because I have to manage types myself
- Bad, because I'll have to create and apply database migrations myself
