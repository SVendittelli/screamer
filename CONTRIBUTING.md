# Contributing to 🩸 Screamer<!-- omit in toc -->

First off, thanks for taking the time to contribute! ❤️

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them.
Please make sure to read the relevant section before making your contribution.
It will make it a lot easier for us maintainers and smooth out the experience for all involved.
The community looks forward to your contributions. 🎉

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

## Table of Contents<!-- omit in toc -->

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Your First Code Contribution](#your-first-code-contribution)
  - [Improving The Documentation](#improving-the-documentation)
  - [Add Yourself as a Contributor](#add-yourself-as-a-contributor)
- [Styleguides](#styleguides)
  - [Commit Messages](#commit-messages)

## Code of Conduct

This project and everyone participating in it is governed by the
[Screamer Code of Conduct](https://github.com/SVendittelli/screamerblob/main/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable behavior
to <sam.vendittelli@hotmail.com>.

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](https://svendittelli.github.io/screamer/).

Before you ask a question, it is best to search for existing [Issues](https://github.com/SVendittelli/screamer/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Start a new [discussion](https://github.com/SVendittelli/screamer/discussions/new?category=q-a).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

## I Want To Contribute

> ### Legal Notice<!-- omit in toc -->
>
> When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.

### Reporting Bugs

#### Before Submitting a Bug Report<!-- omit in toc -->

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](https://svendittelli.github.io/screamer/). If you are looking for support, you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](https://github.com/SVendittelli/screamerissues?q=label%3Abug).
- Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
  - Stack trace (Traceback)
  - OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
  - Version of the interpreter, compiler, SDK, runtime environment, package manager, depending on what seems relevant.
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it with older versions?

#### How Do I Submit a Good Bug Report?<!-- omit in toc -->

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. If you believe you have found a security vulnerability, please report it through [GitHub's Security Advisories](https://github.com/SVendittelli/screamer/security/advisories).
>
> The project's [security policy](https://github.com/SVendittelli/screamer/security/policy) can be found in the [`SECURITY.md`](./SECURITY.md).

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](https://github.com/SVendittelli/screamer/issues/new) with the [Bug report issue template](./.github/ISSUE_TEMPLATE/bug_report.md).
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the _reproduction steps_ that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro`. Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags, and the issue will be left to be [implemented by someone](#your-first-code-contribution).

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Screamer, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

#### Before Submitting an Enhancement<!-- omit in toc -->

- Make sure that you are using the latest version.
- Read the [documentation](https://svendittelli.github.io/screamer/) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](https://github.com/SVendittelli/screamer/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

#### How Do I Submit a Good Enhancement Suggestion?<!-- omit in toc -->

Enhancement suggestions are tracked as [GitHub issues](https://github.com/SVendittelli/screamer/issues).
Please use the [Feature request issue template](./.github/ISSUE_TEMPLATE/feature_request.md) when creating a suggestion.

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most Screamer users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

### Your First Code Contribution

#### First Time Setup<!-- omit in toc -->

Ensure you have the following software installed:

- [node](https://nodejs.org/) - 20.x
- A local instance of PostgreSQL - see [this guide](https://www.prisma.io/dataguide/postgresql/setting-up-a-local-postgresql-database) if you are unsure

Create a file called `.env` in the project root and add the following lines to it:

```terminal
DATABASE_URL="<the connection url of your local postgres instance>"
SUPERTOKENS_API_KEY=""
SUPERTOKENS_CONNECTION_URI="https://try.supertokens.com"
```

If you have joined the project as a maintainer and have been granted access to Vercel, then please install the [Vercel CLI](https://vercel.com/docs/cli) and run `vercel login`.
After you have successfully logged in, run the following to get the development environment variables.

```terminal
vercel env pull .env
```

Now you have the environment variables configured, install the project dependencies with `npm`:

```terminal
npm install
```

#### Run Locally<!-- omit in toc -->

Use the following command to run Screamer in development mode:

```terminal
npm run dev
```

Open <http://localhost:3000> with your browser to see the site.

When working on components, run the Storybook with:

```terminal
npm run storybook
```

It will open automatically in your browser, if it does not, navigate to <http://localhost:6006/>.

#### Development Environment<!-- omit in toc -->

The recommended IDE for Screamer is [Visual Studio Code (VSCode)](https://code.visualstudio.com/).
Please use the extensions recommended in [`.vscode/extensions.json`](./.vscode/extensions.json) for the best developer experience.

#### Linting, Formatting, & Testing<!-- omit in toc -->

All code will be automatically linted on commit and all the tests will run before a push.

If you want to run the formatter/linter manually you can use the following npm scripts respectively:

```terminal
npm run format
npm run lint
```

There are three kinds of tests for Screamer, each has have their own commands:

1. Unit tets: `npm test` - Note, this runs in an interactive "watch mode". If you just want to run them all and then exit use `npm run test:ci`
2. e2e tests: `npx playwright install && npm run e2e` - To run these tests with a UI, use `npm run e2e:ui`
3. Smoke/Acceptance tests: In one terminal run `npm run storybook` and in a separate terminal run `npm run test-storybook`

For more details about writing tests and the testing strategy for Screamer, please read [`testing.md`](./docs/testing.md).

#### Submitting a Pull Request<!-- omit in toc -->

Please [raise a pull request](https://github.com/SVendittelli/screamer/pulls) with your changes to the `main` branch using the pull request template.

### Improving The Documentation

All the documentation is written in markdown and stored in the `/docs` folder.
The docs are built using jekyll and details about running them locally can be found in that folder's [`README.md`](./docs/README.md).

#### Decision Records<!-- omit in toc -->

If you are proposing a new major decision for the project, please create an ADR following the guidance in [`docs/decisions/index.md`](./docs/decisions/index.md).

### Add Yourself as a Contributor

To add yourself to the table of contributors, follow the [@all-contributors bot usage instructions](https://allcontributors.org/docs/en/bot/usage).

## Styleguides

### Commit Messages

Screamer uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for commit messages.

This repo is [Commitizen friendly](https://github.com/commitizen/cz-cli).
If you do not have it installed globally, you can use `npm run commit` to get a prompt to build a correctly formatted commit message.

## Attribution<!-- omit in toc -->

This guide is based on the **contributing-gen**. [Make your own](https://github.com/bttger/contributing-gen)!
