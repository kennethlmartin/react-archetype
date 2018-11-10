/**
 * @module .eslintrc
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  extends: [
    'archetype/configurations/node',
    'archetype/rules/plugin-react',
  ],
  parser: 'babel-eslint',
  root: true,
  settings: {
    react: {
      version: '16.6',
    },
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
