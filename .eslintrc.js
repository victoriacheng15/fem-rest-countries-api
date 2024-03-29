module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, parser: 'flow' }],
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
  },
};
