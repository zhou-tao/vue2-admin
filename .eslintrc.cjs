module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'vue/multi-word-component-names': ['off']
  }
}