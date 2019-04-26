/**
 * @module .eslintrc
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  env: {
    mocha: true,
  },
  extends: [
    'archetype/configurations/browser',
    'archetype/rules/plugin-react',
    'archetype/rules/plugin-jsdoc',
  ],
  globals: {
    expect: 'readonly',
    mount: 'readonly',
    render: 'readonly',
    sinon: 'readonly',
    shallow: 'readonly',
  },
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
