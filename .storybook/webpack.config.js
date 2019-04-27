/**
 * Extendable webpack configuration for Storybook
 *
 * @module .storybook/webpack.config
 * @see https://storybook.js.org/docs/configurations/custom-webpack-config/
 */

const path = require('path');
const constants = require('webpack/webpack.constants');

 module.exports = async ({ config, mode }) => {
   // Remove the existing css rule
  config.module.rules = config.module.rules.filter(
    f => f.test.toString() !== '/\\.css$/'
  );

   config.module.rules.push({
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
   });

   return config;
 };
