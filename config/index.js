/**
 * @module config
 */

const convict = require('convict');

const app = require('config/app');
const cookieKeys = require('config/cookie-keys');
const cookieSession = require('config/cookie-session');
const dirs = require('config/dirs');
const files = require('config/files');
const webpack = require('config/webpack');

module.exports = convict({
  app,
  cookieKeys,
  cookieSession,
  dirs,
  env: {
    default: 'development',
    env: 'NODE_ENV',
    format: ['production', 'staging', 'development', 'test'],
  },
  files,
  webpack,
});
