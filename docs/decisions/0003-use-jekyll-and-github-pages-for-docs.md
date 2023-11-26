---
# These are optional elements. Feel free to remove any of them.
status: accepted
date: 2023-11-26
parent: Decisions
nav_order: 3
---

# Use Just the Docs Jekyll theme and host on GitHub Pages

## Context and Problem Statement

Documentation must be stored close to the code to be kept updated but must also be easily accessible if it is to be read.
Decisions and other documentation should also be easily searchable both for a developer and an end-user.
Where should the documentation be stored and should it be hosted?

## Considered Options

- Docs in a separate repo, not hosted
- Docs in a separate repo, hosted
- Docs in the same repo, not hosted
- Docs in the same repo, hosted

## Decision Outcome

Chosen option: "Docs in the same repo, hosted", because we get the best of both worlds.
The documentation is at the fingertips of the developer and the end-user.

## Pros and Cons of the Options

### Docs in a separate repo, not hosted

- Good, because it is easy to set up
- Bad, because docs are "out of sight, out of mind"
- Bad, because docs are hard to access for users

### Docs in a separate repo, hosted

- Good, because docs can be accessed by users
- Bad, because docs are "out of sight, out of mind"

### Docs in the same repo, not hosted

- Good, because docs are close to the source code
- Bad, because docs are hard to access for users

### Docs in the same repo, hosted

- Good, because docs are close to the source code
- Good, because docs can be accessed by users
- Bad, because deployment is more complicated

## More Information

GitHub pages are quick and easy to configure, and Just the Docs Jekyll theme provides search and a dark theme.
