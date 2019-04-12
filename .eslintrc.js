/**
 * @module .eslintrc
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  env: {
    mocha: true,
  },
  extends: [
    'archetype/configurations/node',
    'archetype/rules/plugin-react',
    'archetype/rules/plugin-jsdoc',
  ],
  globals: {
    expect: 'readonly',
  },
  parser: 'babel-eslint',
  root: true,
  settings: {
    react: {
      version: '16.6',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json'],
        moduleDirectory: ['node_modules', '.']
      },
    },
  },
};
