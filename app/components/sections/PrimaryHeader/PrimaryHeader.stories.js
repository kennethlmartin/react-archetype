/**
 * @module app/components/elements/PrimaryHeader.stories
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import PrimaryHeader from './PrimaryHeader';

storiesOf('Components|sections/PrimaryHeader', module)
  .add('default', () => (
    <PrimaryHeader />
  ));
