/**
 * @module config
 */

const convict = require('convict');

module.exports = convict({
  app: require('./app'),
  cookieKeys: require('./cookie-keys'),
  cookieSession: require('./cookie-session'),
  dirs: require('./dirs'),
  env: {
    default: 'development',
    doc: 'application environment',
    env: 'NODE_ENV',
    format: ['production', 'staging', 'development', 'test'],
  },
  files: require('./files'),
  webpack: require('./webpack'),
});
