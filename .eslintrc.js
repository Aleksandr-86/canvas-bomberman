module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
    'no-console': 'warn',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useAppDispatch',
      },
    ],
  },
  ignorePatterns: [
    'packages/client/public/**',
    'packages/client/dist/**',
    'packages/client/dist-ssr/**',
    'packages/server/dist/**',
  ],
}
