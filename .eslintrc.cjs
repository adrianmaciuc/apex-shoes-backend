module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  ignorePatterns: ["dist/", "build/", "node_modules/", ".cache/", ".tmp/"],
  rules: {
    // Project-specific rules can be added here. Keep defaults conservative for now.
    "no-console": "warn",
    "no-unused-vars": "off",
    "no-explicit-any": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
  },
};
