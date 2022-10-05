module.exports = {
  // Type check TypeScript files
  "**/*.(ts|tsx)": () => "yarn tsc --noEmit",

  // Lint then format TypeScript and JavaScript files
  "**/*.(ts|tsx|js)": (f) => [
    `yarn eslint --fix ${f.join(" ")}`,
    `yarn prettier --write ${f.join(" ")}`,
  ],

  // Format MarkDown and JSON
  "**/*.(md|json)": (f) => `yarn prettier --write ${f.join(" ")}`,
};
