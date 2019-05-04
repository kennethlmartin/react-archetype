/**
 * @module app/.babelrc.js
 * @see https://babeljs.io/docs/en/configuration#babelrc
 */

module.exports = {
  plugins: [
    '@loadable/babel-plugin',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    'react-hot-loader/babel',
  ],
  presets: [
    ['@babel/preset-env', {
      corejs: 3,
      useBuiltIns: 'entry',
    }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
