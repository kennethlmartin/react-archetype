/**
 * Storybook configuration
 *
 * @module .storybook/config
 * @see https://storybook.js.org/docs/configurations/options-parameter
 */

import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';

import stories from './stories';
import theme from './theme';

addDecorator(storyFn => (
  <div style={{ padding: '15px' }}>{storyFn()}</div>
));

addParameters({
  options: {
    theme,
  },
});

configure(stories, module);
