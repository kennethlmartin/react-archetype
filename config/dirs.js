/**
 * @module config/dirs
 */

const path = require('path');

module.exports = {
  app: {
    default: path.join(process.env.NODE_PATH, 'app'),
    format: String,
  },
  build: {
    default: path.join(process.env.NODE_PATH, 'build'),
    format: String,
  },
};
