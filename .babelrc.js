/**
 * @module .babelrc.js
 * @see https://babeljs.io/docs/en/configuration#babelrc
 */

module.exports = {
  presets: [
    ['@babel/preset-env', {
      corejs: 3,
      targets: { node: 'current' },
      useBuiltIns: 'entry',
    }],
    '@babel/preset-react',
  ],
};
