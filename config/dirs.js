/**
 * @module config/dirs
 */

const path = require('path');

module.exports = {
  app: {
    default: path.join(process.env.NODE_PATH, 'app'),
    doc: 'root path of application',
    format: String,
  },
  babelLoaderCache: {
    default: path.join(process.env.NODE_PATH, '.babelcache'),
    doc: 'cache directory for babel-loader',
    format: String,
  },
  build: {
    default: path.join(process.env.NODE_PATH, 'build'),
    doc: 'root path of generated files',
    format: String,
  },
};
