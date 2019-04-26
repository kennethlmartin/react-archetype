/**
 * @module app/components/elements/Button/Button.spec
 */

import React from 'react';
import Button from './Button';

describe('Button Component', () => {
  const text = 'Click me';

  it('should render button element', () => {
    const wrapper = shallow(<Button>{text}</Button>);
    expect(wrapper.exists('button')).to.be.true;
  });

  it('should have text', () => {
    const wrapper = shallow(<Button>{text}</Button>);
    expect(wrapper.find('button').text()).contain(text);
  });

  it('should have disabled state', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallow(<Button disabled>{text}</Button>);

    wrapper.find('button').simulate('click');
    expect(wrapper.find('button').props()['disabled']).to.be.true;
    expect(clickCallback.notCalled).to.be.true;
  });

  it('should have click event', () => {
    const clickCallback = sinon.spy();
    const wrapper = shallow(<Button onClick={clickCallback}>{text}</Button>);

    wrapper.find('button').simulate('click');
    expect(clickCallback.calledOnce).to.be.true;
  });
});
