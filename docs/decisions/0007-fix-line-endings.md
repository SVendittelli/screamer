---
status: accepted
date: 2023-11-27
parent: Decisions
nav_order: 7
---

# Use `.gitattributes` to fix line endings

## Context and Problem Statement

Windows machines and unix systems use different line endings.
Modern editors, for instance [Visual Studio Code](https://code.visualstudio.com/), can handle any line endings.
For consistency, I want to us unix line endings (LF) everywhere.
This can be enforced by [prettier](https://prettier.io/) as selected by [ADR-0006](./0006-adapt-next-enterprise.md).

## Considered Options

- Git autocrlf
- `.gitattributes` file

## Decision Outcome

Chosen option: "`.gitattributes` file", because it applies regardless of user settings.

## Pros and Cons of the Options

### Git autocrlf

Set `core.autocrlf` to `true` on my (windows) developer machine.

This will Git to ensure line endings in files you checkout are correct for Windows.
For compatibility, line endings are converted to Unix style when you commit files.

- Good, because it is simple to configure
- Good, because it requires no maintenance
- Neutral, because it requires CI to check line endings on GitHub
- Bad, because it has to be done on every machine I use for development

### `.gitattributes` file

Configure a `.gitattributes` file to manage how Git reads line endings.

- Good, because it ensures consistent behavior for all users, regardless of their Git settings and environment
- Neutral, because it requires CI to check line endings on GitHub
- Bad, because new file types need to be added to the file whenever they're added to the project

<!-- This is an optional element. Feel free to remove. -->

## More Information

See [GitHub's Getting started with Git](https://docs.github.com/en/get-started/getting-started-with-git/configuring-git-to-handle-line-endings).

The `.gitattributes` and `check-gitattributes.sh` files are sourced from [.gitattributes Templates](https://github.com/gitattributes/gitattributes).
