/**
 * @module app/.babelrc.js
 * @see https://babeljs.io/docs/en/configuration#babelrc
 */

module.exports = {
  plugins: [
    '@loadable/babel-plugin',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    ['@babel/transform-runtime', {
      corejs: 3,
    }],
    'react-hot-loader/babel',
  ],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
};
