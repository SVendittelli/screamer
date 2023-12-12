// See https://nextjs.org/docs/basic-features/eslint#lint-staged for details
const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "!*.{md,js,jsx,ts,tsx}": "prettier --write --ignore-unknown",
  "*.{js,jsx,ts,tsx}": [
    "prettier --write --ignore-unknown",
    buildEslintCommand,
  ],
  "*.md": ["markdownlint-cli2 --fix", "prettier --write"],
};
