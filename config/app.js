/**
 * @module config/app
 */

module.exports = {
  assetsPath: {
    default: '/archetype/assets/',
    env: 'APP_ASSETS_PATH',
    format: String,
  },
  basePath: {
    default: '/archetype',
    env: 'APP_BASEPATH',
    format: String,
  },
  hostname: {
    default: 'http://localhost',
    env: 'APP_HOSTNAME',
    format: 'url',
  },
  port: {
    default: 3000,
    env: 'APP_PORT',
    format: 'port',
  },
};
