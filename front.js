module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint-config-youngapp',
  ].map(require.resolve),
  rules: {}
};