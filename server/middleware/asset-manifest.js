/**
 * @module server/middleware/asset-manifest
 */

const path = require('path');
const axios = require('axios');

const config = require('config');

const loadAssetManifest = async () => {
  if (!config.get('webpack.enabled')) {
    return require(config.get('files.assetManifest')); // eslint-disable-line import/no-dynamic-require
  }

  try {
    const assetManifest = path.basename(config.get('files.assetManifest'));
    const { assetsPath } = config.get('app');
    const { port } = config.get('webpack');

    const response = await axios.get(`http://webpack:${port}${assetsPath}${assetManifest}`);
    return response.data;
  } catch ({ message }) {
    throw new Error(message);
  }
};

module.exports = function assetManifest() {
  return async (ctx, next) => {
    ctx.assetManifest = await loadAssetManifest();
    return next();
  };
};
