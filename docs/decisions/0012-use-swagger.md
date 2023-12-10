---
status: accepted
date: 2023-12-10
parent: Decisions
nav_order: 12
---

# Use Open API 3.1 and Swagger to document endpoints

## Context and Problem Statement

The APIs need to be documented and that documentation needs to be easily accessible.
[OpenAPI 3.1](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md) is already a well established standard for documenting APIs.
Making it accessible is the main priority.

## Considered Options

- Swagger UI
- Redoc

## Decision Outcome

Chosen option: "Swagger UI", because it has a free "try it now" feature.

## Pros and Cons of the Options

### Swagger UI

[Swagger UI](https://swagger.io/tools/swagger-ui/).

- Good, because it is free
- Good, because I am familiar with it
- Bad, because it is hard to customise

### Redoc

[Redoc](https://github.com/Redocly/redoc).

- Good, because it is responsive
- Bad, because some features are paywalled

## More Information

- Use [next-swagger-doc](https://github.com/jellydn/next-swagger-doc) to define the spec in comments.
