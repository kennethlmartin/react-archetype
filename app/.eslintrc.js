/**
 * @module .eslintrc
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  extends: [
    'archetype/configurations/browser',
    'archetype/rules/plugin-react',
  ],
  root: true,
  settings: {
    react: {
      version: '16.6',
    },
    'import/resolver': {
      webpack: {
        config: `${__dirname}/../webpack.config.js`,
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
};
