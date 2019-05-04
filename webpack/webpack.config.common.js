/**
 * Extendable webpack configuration of common options.
 *
 * @module webpack/webpack.config.common
 * @see https://webpack.js.org/configuration/
 */

const path = require('path');
const LoadablePlugin = require('@loadable/webpack-plugin');

const config = require('config');
const constants = require('./webpack.constants');

module.exports = {
  entry: {
    [constants.BUNDLES.MAIN]: config.get('files.entryScript'),
  },
  module: {
    rules: [{
      include: config.get('dirs.app'),
      test: constants.TESTS.JS,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: config.get('dirs.babelLoaderCache'),
          presets: [
            // Disable modules in Babel to allow for Webpack tree-shaking
            ['@babel/preset-env', { modules: false }],
          ],
        },
      },
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
    new LoadablePlugin({
      filename: path.basename(config.get('files.assetManifest')),
    }),
  ],
};
