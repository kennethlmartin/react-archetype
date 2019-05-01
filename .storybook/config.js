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

const styles = {
  padding: '15px',
};

addDecorator(storyFn => (
  <div style={styles}>
    {storyFn()}
  </div>
));

addParameters({
  options: {
    theme,
  },
});

configure(stories, module);
