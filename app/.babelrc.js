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
    'react-hot-loader/babel',
  ],
  presets: [
    ['@babel/preset-env', {
      useBuiltIns: 'entry',
      corejs: 3,
    }],
    '@babel/preset-react',
  ],
};
