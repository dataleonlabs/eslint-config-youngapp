# eslint-config-youngapp
Your package ESLint Styles as an extensible shared config. ES6, Node, Angular, Inspired of AirBnB JavaScript Guide

## Usage

We export three ESLint configurations for your usage.

### eslint-config-youngapp

Our default export contains all of our ESLint rules, including EcmaScript 6+
and Angular. It requires `eslint` and `eslint-plugin-angular`.

1. `npm install --save-dev eslint-config-youngapp eslint-plugin-angular eslint`
2. add `"extends": "youngapp"` to your .eslintrc

### eslint-youngapp/node
Add `"extends": "youngapp/node"` to your .eslintrc

### eslint-youngapp/angular
Add `"extends": "youngapp/angular"` to your .eslintrc

### eslint-youngapp/front
Add `"extends": "youngapp/front"` to your .eslintrc

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
