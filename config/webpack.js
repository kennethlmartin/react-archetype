/**
 * @module config/webpack
 */

module.exports = {
  enabled: {
    default: false,
    env: 'WEBPACK_ENABLED',
    format: Boolean,
  },
  hostname: {
    default: 'http://localhost',
    env: 'WEBPACK_HOSTNAME',
    format: 'url',
  },
  port: {
    default: 3001,
    env: 'WEBPACK_PORT',
    format: 'port',
  },
};
