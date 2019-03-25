/**
 * @module postcss.config
 * @see https://github.com/postcss/postcss
 */

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-normalize'),
    require('postcss-preset-env')({
      features: {
        'nesting-rules': true,
      },
    }),
    require('cssnano'),
  ],
};
