/**
 * @module config/webpack
 */

module.exports = {
  enabled: {
    default: false,
    doc: 'whether to use webpack for application assets',
    env: 'WEBPACK_ENABLED',
    format: Boolean,
  },
  hostname: {
    default: 'http://localhost',
    doc: 'webpack origin in format of protocol://hostname',
    env: 'WEBPACK_HOSTNAME',
    format: 'url',
  },
  port: {
    default: 3001,
    doc: 'webpack server port',
    env: 'WEBPACK_PORT',
    format: 'port',
  },
};
