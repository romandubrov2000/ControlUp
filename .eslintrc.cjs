/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'], // optional but nice if you use type-aware rules
  },
  env: {
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'playwright'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:playwright/playwright-test',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['tests/**/*.ts', '**/*.spec.ts'],
      env: {
        'playwright/playwright-test': true,
      },
    },
  ],
  rules: {
    // your custom tweaks go here
    // Example:
    // '@typescript-eslint/no-explicit-any': 'off',
  },
  ignorePatterns: ['node_modules', 'dist', 'playwright-report', 'test-results'],
};
