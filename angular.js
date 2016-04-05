module.exports = {
  env: {
    browser: true
  },
  extends: [
    'eslint-config-youngapp',
    'eslint-config-youngapp/rules/angular'
  ].map(require.resolve),
  rules: {}
};

