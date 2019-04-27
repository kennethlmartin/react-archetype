/**
 * @module app/components/elements/PrimaryFooter.stories
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import PrimayFooter from './PrimaryFooter';

storiesOf('Components|sections/PrimayFooter', module)
  .add('default', () => (
    <PrimayFooter />
  ));
