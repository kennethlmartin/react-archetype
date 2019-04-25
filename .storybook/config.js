/**
 * Storybook configuration
 *
 * @module .storybook/config
 * @see https://storybook.js.org/docs/configurations/options-parameter
 */

import { addParameters, configure } from '@storybook/react';

import stories from './stories';
import theme from './theme';

addParameters({
  options: {
    theme,
  },
});

configure(stories, module);
