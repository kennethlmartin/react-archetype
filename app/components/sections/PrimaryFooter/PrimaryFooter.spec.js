/**
 * @module app/components/sections/PrimaryFooter.spec
 */

import React from 'react';
import PrimaryFooter from './PrimaryFooter';

describe('PrimaryFooter Component', () => {
  it('should render footer element', () => {
    const wrapper = shallow(<PrimaryFooter />);
    expect(wrapper.exists('footer')).to.be.true;
  });

  it('should render component className', () => {
    const wrapper = shallow(<PrimaryFooter />);
    expect(wrapper.hasClass('primary-footer')).to.be.true;
  });
});
