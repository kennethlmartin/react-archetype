/**
 * @module config/files
 */

const path = require('path');
const dirs = require('./dirs');

module.exports = {
  assetManifest: {
    default: path.join(dirs.build.default, 'asset-manifest.json'),
    format: String,
  },
  asyncAssetManifest: {
    default: path.join(dirs.build.default, 'async-asset-manifest.json'),
    format: String,
  },
  entryScript: {
    default: path.join(dirs.app.default, 'Client.jsx'),
    format: String,
  },
};
