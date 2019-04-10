/**
 * @module babel.config.js
 * @see https://babeljs.io/docs/en/configuration
 */

module.exports = function (api) {
  api.cache(true);

  const presets = [
    ['@babel/preset-env', {
      corejs: 3,
      targets: { node: 'current' },
      useBuiltIns: 'entry',
    }],
    '@babel/preset-react',
  ];

  return {
    presets,
  };
};
