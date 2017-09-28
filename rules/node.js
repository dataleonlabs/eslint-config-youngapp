module.exports = {
  'env': {
    'node': true
  },
  'rules': {
    // enforce return after a callback
    'callback-return': 0,
    // enforces error handling in callbacks (node environment)
    'handle-callback-err': 0,
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': [0, false],
    // disallow use of new operator with the require function
    'no-new-require': 2,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 2,
    // disallow process.exit()
    'no-process-exit': 2,
    // restrict usage of specified node modules
    'no-restricted-modules': 0,
    // disallow use of synchronous methods (off by default)
    'no-sync': 0,

    // You should not call require() without arguments or with empty argument
    'require-path-exists/notEmpty': 2,

    // You should pass only one argument to require() function
    'require-path-exists/tooManyArguments': 2,

    // You should only pass existing paths to require()
    'require-path-exists/exists': [ 2, {
      'extensions': [
        '',
        '.js',
        '.jsx',
        '.es.js',
        '.jsx',
        '.json5',
        '.es',
        '.es6',
        '.coffe'
      ],
    }],

    // disallow the use of console
    'no-console': ['error', { allow: ['warn', 'error'] }]

  }
};
