/**
 * Storybook configuration
 *
 * @module .storybook/stories
 */

import 'app/styles/main.pcss';

const req = require.context('app', true, /\.stories\.js$/);

export default function() {
  req.keys().forEach(filename => req(filename))
}
