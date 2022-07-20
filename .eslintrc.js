module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': [0],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'jsx-a11y/anchor-is-valid': [0],
    'jsx-a11y/no-noninteractive-element-interactions': [0],
    'jsx-a11y/no-static-element-interactions': [
      0,
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/click-events-have-key-events': [0],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-one-expression-per-line': [
      0,
      {
        allow: 'single-child',
      },
    ],
  },
};
