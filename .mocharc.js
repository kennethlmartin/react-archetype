/**
 * @module .mocharc
 * @see https://mochajs.org/#configuring-mocha-nodejs
 */

module.exports = {
  color: true,
  diff: true,
  reporter: 'spec',
  require: [
    '@babel/register',
    'ignore-styles',
    'test/helpers.js',
  ],
  spec: [
    'app/**/*.spec.js',
    'server/**/*.spec.js',
  ],
  ui: 'bdd',
};
