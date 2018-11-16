/**
 * @module webpack.config
 */

const webpackMerge = require('webpack-merge');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const config = require('config');

/**
 * Measure webpack build speed
 * @see https://www.npmjs.com/package/speed-measure-webpack-plugin
 */
const smp = new SpeedMeasurePlugin({
  disabled: config.get('webpack.measure'),
});

/**
 * Base module paths for webpack to resolve
 * - allows eslint to resolve paths from webpack
 * - don't use environment variables here so eslint can run in editor
 */
const webpackModulePaths = {
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: [__dirname, 'node_modules'],
  },
};

/**
 * Generate webpack configuration based on npm run commands
 */
let webpackConfig;
switch (process.env.npm_lifecycle_event) {
  case 'start:webpack':
    webpackConfig = require('webpack/webpack.config.dev');
    break;
  case 'bundle':
    webpackConfig = require('webpack/webpack.config.bundle');
    break;
  default:
    webpackConfig = {};
}

// uncomment below to trace webpack deprecation notices to specific loader
// process.traceDeprecation = true;

module.exports = smp.wrap(webpackMerge(webpackConfig, webpackModulePaths));
