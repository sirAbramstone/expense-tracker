module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'prettier/vue',
    'plugin:vue/recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'semi': [2, 'always'],
    'no-console': 'off',
    "@typescript-eslint/no-unused-vars": ["warn", {
      "vars": "all",
      "args": "after-used",
      "ignoreRestSiblings": false,
    }],
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { 'semi': true }],
    'no-useless-catch': 'off',
  }
};
