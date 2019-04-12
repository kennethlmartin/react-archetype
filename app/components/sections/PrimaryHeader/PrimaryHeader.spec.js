/**
 * @module app/components/sections/PrimaryHeader.spec
 */

import React from 'react';
import PrimaryHeader from './PrimaryHeader';

describe('PrimaryHeader Component', () => {
  it('renders component className', () => {
    const wrapper = shallow(<PrimaryHeader />);
    expect(wrapper.hasClass('primary-header')).to.be.true;
  });
});
