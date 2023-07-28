module.exports = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    semi: ['warn', 'always'],
    quotes: ['warn', 'single'],
    'no-unused-vars': 'warn',
  },
};
