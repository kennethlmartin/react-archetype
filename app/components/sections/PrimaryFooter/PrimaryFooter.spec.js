/**
 * @module app/components/sections/PrimaryFooter.spec
 */

import React from 'react';
import PrimaryFooter from './PrimaryFooter';

describe('PrimaryFooter Component', () => {
  it('renders component className', () => {
    const wrapper = shallow(<PrimaryFooter />);
    expect(wrapper.hasClass('primary-footer')).to.be.true;
  });
});
