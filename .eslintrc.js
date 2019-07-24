module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 'off',
    'vue/script-indent': ['error', 2, {
      'switchCase': 1,
      'baseIndent': 1
    }],
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'closeBracket': 1,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/max-attributes-per-line': [2, {
      'singleline': 2,
      'multiline': {
        'max': 2,
        'allowFirstLine': true
      }
    }],
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': 1,
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'never',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    "vue/component-name-in-template-casing": ['error', 'kebab-case']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}