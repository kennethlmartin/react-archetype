/**
 * @module config/app
 */

module.exports = {
  assetsPath: {
    default: '/archetype/assets/',
    doc: 'relative path to asset files',
    env: 'APP_ASSETS_PATH',
    format: String,
  },
  basePath: {
    default: '/archetype',
    doc: 'root path of the app',
    env: 'APP_BASEPATH',
    format: String,
  },
  hostname: {
    default: 'http://localhost:3000',
    doc: 'application origin in format of protocol://hostname',
    env: 'APP_HOSTNAME',
    format: 'url',
  },
  maintenance: {
    enabled: {
      default: false,
      doc: 'is maintenance mode enabled?',
      env: 'MAINTENANCE_ENABLED',
      format: Boolean,
    },
    path: {
      default: '/maintenance',
      doc: 'app maintenance path',
      format: String,
    },
  },
  port: {
    default: 3000,
    doc: 'server port',
    env: 'APP_PORT',
    format: 'port',
  },
};
