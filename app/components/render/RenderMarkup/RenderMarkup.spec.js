/**
 * @module app/components/render/RenderMarkup.spec
 */

import React from 'react';
import RenderMarkup from './RenderMarkup';

describe('RenderMarkup Component', () => {
  it('renders html', () => {
    const html = '<span>foo</span';
    const wrapper = shallow(<RenderMarkup html={html} />);

    expect(wrapper.html()).contain(html);
  });

  it('renders html in specified tag', () => {
    const html = '<span>foo</span';
    const wrapper = shallow(<RenderMarkup html={html} tag="span" />);

    expect(wrapper.is('span')).to.be.true;
  });
});
