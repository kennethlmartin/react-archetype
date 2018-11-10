/**
 * Configuration for webpack dev server.
 *
 * @module webpack/webpack.config.dev
 * @see https://webpack.js.org/configuration/
 */

const DashboardPlugin = require('webpack-dashboard/plugin');
const webpackMerge = require('webpack-merge');
const { DefinePlugin, HotModuleReplacementPlugin } = require('webpack');

const common = require('./webpack.config.common');
const config = require('config');
const constants = require('./webpack.constants');

const PUBLIC_PATH = `${config.get('webpack.hostname')}:${config.get('webpack.port')}${config.get('app.assetsPath')}`;

module.exports = webpackMerge.smart(common, {
  devServer: {
    allowedHosts: ['webpack'],
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: '0.0.0.0',
    hot: true,
    port: config.get('webpack.port'),
    publicPath: PUBLIC_PATH,
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [{
      test: constants.TESTS.CSS,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
        },
      }],
    }],
  },
  output: {
    chunkFilename: '[name].js',
    filename: '[name].js',
    publicPath: PUBLIC_PATH,
  },
  plugins: [
    new DashboardPlugin(),
    new DefinePlugin({
      'process.env': {
        BABEL_ENV: JSON.stringify('development'),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
    new HotModuleReplacementPlugin(),
  ],
});
