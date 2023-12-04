---
status: accepted
date: 2023-11-30
parent: Decisions
nav_order: 9
---

# Use PostgreSQL on Neon as a database

## Context and Problem Statement

Following [ADR-0008 Use Prisma ORM](./0008-use-prisma-orm.md), I need a database technology and host.

## Considered Options

- MongoDB on Atlas
- PostgreSQL on Neon
- PostgreSQL on Amazon
- Other database technologies

## Decision Outcome

Chosen option: "PostgreSQL on Neon", because it easily allows branching databases for preview environments.

### Consequences

- Good, because database branches are created automatically for preview environments
- Bad, because builds fail if the database if the compute endpoint is asleep
- Bad, because we need additional GitHub actions for cleaning up branches

## Pros and Cons of the Options

### MongoDB on Atlas

[MongoDB](https://www.mongodb.com/) is a NoSQL document database program.
[MongoDB Atlas](https://www.mongodb.com/atlas) is a multi-cloud database service by the same people that build MongoDB.

- Good, because it is very fast
- Good, because it has a simple query syntax
- Good, because it has a free tier
- Neutral, because it is a learning opportunity
- Bad, because some of [prisma's](https://www.prisma.io/mongodb) features are not available with MongoDB

### PostgreSQL on Neon

[PostgreSQL](https://www.postgresql.org/) is a popular, open source relational database.
[Neon](https://neon.tech/) offers a fully managed, serverless Postgres service.

- Good, because it has a generous free tier
- Good, because they offer branching
- Good, because they don't have storage limits
- Good, because they have an integration with vercel as selected in [ADR-0005](./0005-host-on-vercel.md)
- Neutral, because it is a learning opportunity
- Bad, because they have limited compute time

### PostgreSQL on Amazon

[PostgreSQL](https://www.postgresql.org/) is a popular, open source relational database.
[Amazon Relational Database Service (RDS)](https://aws.amazon.com/rds/)

- Good, because lots of details on how to use it online
- Good, because it has a free tier
- Neutral, because it is a learning opportunity
- Bad, because the free tier is region locked

## More Information

- [Connect from Prisma to Neon](https://neon.tech/docs/guides/prisma)
- [Use Prisma Migrate with Neon](https://neon.tech/docs/guides/prisma-migrate)
- [Vercel Neon integration](https://vercel.com/integrations/neon)
- [GitHub action to delete neon branches after merge](https://github.com/SVendittelli/screamer/blob/main/.github/workflows/branch-delete.yml)
