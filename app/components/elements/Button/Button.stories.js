/**
 * @module app/components/elements/Button.stories
 */

import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Components|elements/Button', module)
  .add('basic', () => (
    <Button onClick={action('clicked')}>{'Click Me!'}</Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={action('clicked')}>{'Click Me!'}</Button>
  ));
