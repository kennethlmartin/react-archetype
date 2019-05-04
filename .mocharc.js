/**
 * @module .mocharc
 * @see https://mochajs.org/#configuring-mocha-nodejs
 */

module.exports = {
  color: true,
  diff: true,
  extension: [
    'js',
    'jsx',
    'ts',
    'tsx',
  ],
  reporter: 'spec',
  require: [
    'test/helpers.js',
  ],
  spec: [
    'app/**/*.spec.js',
    'server/**/*.spec.js',
  ],
  ui: 'bdd',
};
