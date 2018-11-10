/**
 * Extendable webpack configuration of common options.
 *
 * @module webpack/webpack.config.common
 * @see https://webpack.js.org/configuration/
 */

const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

const config = require('config');
const constants = require('./webpack.constants');

module.exports = {
  entry: {
    [constants.BUNDLES.MAIN]: config.get('files.entryScript'),
  },
  module: {
    rules: [{
      include: config.get('dirs.app'),
      loader: 'babel-loader',
      options: {
        presets: [
          // Disable modules in Babel to allow for Webpack tree-shaking
          ['@babel/preset-env', { modules: false }],
        ],
      },
      test: constants.TESTS.JSX,
    }],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        [constants.BUNDLES.COMMON]: {
          chunks: 'all',
          enforce: true,
          minChunks: 2,
          name: constants.BUNDLES.COMMON,
          priority: 10,
          reuseExistingChunk: true,
        },
        [constants.BUNDLES.VENDOR]: {
          chunks: 'all',
          name: constants.BUNDLES.VENDOR,
          priority: 20,
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: 'async',
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      maxSize: 0,
      minChunks: 1,
      minSize: 30000,
      name: true,
    },
  },
  output: {
    path: config.get('dirs.build'),
  },
  plugins: [
    new AssetsPlugin({
      filename: path.basename(config.get('files.assetManifest')),
      fileTypes: ['css', 'js'],
      includeAllFileTypes: false,
      keepInMemory: true,
      prettyPrint: true,
      useCompilerPath: true,
    }),
  ],
};
