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

const { hostname, port } = config.get('webpack');
const { assetsPath } = config.get('app');

module.exports = webpackMerge.smart(common, {
  devServer: {
    allowedHosts: ['webpack'],
    compress: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    host: '0.0.0.0',
    hot: true,
    port,
    public: `${hostname}:${port}`,
    publicPath: assetsPath,
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
    publicPath: `${hostname}:${port}${assetsPath}`,
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
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
});
