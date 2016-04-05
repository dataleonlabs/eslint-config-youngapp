module.exports = {
  extends: [
    'eslint-config-youngapp/rules/legacy',
    'eslint-config-youngapp/rules/best-practices',
    'eslint-config-youngapp/rules/errors',
    'eslint-config-youngapp/rules/strict',
    'eslint-config-youngapp/rules/variables',
    'eslint-config-youngapp/rules/style'
  ].map(require.resolve),
  rules: {},
  env: {
    browser: true,
    node: true
  },
};