module.exports = {
  'env': {
    'browser': false,
    'node': true,
    'es6': true
  },
  'ecmaFeatures': {
    'modules': true
  },
  extends: [
    'eslint-config-youngapp',
    'eslint-config-youngapp/rules/es6',
    'eslint-config-youngapp/rules/react'
  ].map(require.resolve),
  rules: {}
};
