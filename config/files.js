/**
 * @module config/files
 */

const path = require('path');
const dirs = require('./dirs');

module.exports = {
  assetManifest: {
    default: path.join(dirs.build.default, 'asset-manifest.json'),
    doc: 'name of asset-manifest file produced by webpack',
    format: String,
  },
  asyncAssetManifest: {
    default: path.join(dirs.build.default, 'async-asset-manifest.json'),
    format: String,
  },
  entryScript: {
    default: path.join(dirs.app.default, 'Client.jsx'),
    doc: 'client-side entry file for the app',
    format: String,
  },
};
