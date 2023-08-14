module.exports = {
  root: true,
  extends: [
    'plugin:vue/recommended',
    '@toryz/basic'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      rules: {
        'no-unused-vars': 'off',
        'no-undef': 'off',
        'indent': 'off'
      }
    }
  ],
  rules: {
    'vue/script-indent': ['error', 2, { baseIndent: 0, switchCase: 1 }],
    'vue/multi-word-component-names': ['off'],
    'vue/max-attributes-per-line': ['off']
  }
}
