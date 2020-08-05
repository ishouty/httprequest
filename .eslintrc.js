module.exports = {
  root: true,
  parser: "babel-eslint",
  plugins: ["babel", "prettier", "jest"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {},
  rules: {
    quotes: [2, "single", { avoidEscape: true, allowTemplateLiterals: true }],
    semi: [2, "never"],
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    amd: true,
    browser: true,
    cy: true,
    Cypress: true,
    before: true,
    after: true,
    beforeEach: true,
    node: true,
  },
};
