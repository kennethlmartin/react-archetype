/**
 * Configuration for production bundle.
 *
 * @module webpack/webpack.config.prod
 * @see https://webpack.js.org/configuration/
 */

const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { DefinePlugin, HashedModuleIdsPlugin } = require('webpack');

const common = require('./webpack.config.common');
const config = require('config');
const constants = require('./webpack.constants');

module.exports = webpackMerge.smart(common, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [{
      include: config.get('dirs.app'),
      test: constants.TESTS.CSS,
      use: [MiniCssExtractPlugin.loader, {
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
  optimization: {
    minimizer: [
      new UglifyJSPlugin(),
    ],
    noEmitOnErrors: true,
  },
  output: {
    chunkFilename: '[name].[contenthash:16].js',
    filename: '[name].[contenthash:16].js',
    publicPath: config.get('app.assetsPath'),
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
    new CleanWebpackPlugin([config.get('dirs.build')], { allowExternal: true }),
    new DefinePlugin({
      'process.env': {
        BABEL_ENV: JSON.stringify('production'),
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:16].css',
    }),
  ],
  stats: {
    assets: true,
    children: false,
    chunks: false,
    colors: true,
    modules: false,
    performance: false,
    warnings: false,
  },
});
