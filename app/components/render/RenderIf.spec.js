/**
 * @module app/components/render/RenderIf.spec
 */

import * as R from 'ramda';
import React from 'react';
import RenderIf from './RenderIf';

describe('RenderIf Component', () => {
  const children = () => <div />;

  it('renders children when `cond` is true', () => {
    const wrapper = shallow((
      <RenderIf cond={R.identity(true)}>
        {children}
      </RenderIf>
    ));

    expect(wrapper.contains(<div />)).to.be.true;
  });

  it('doesn\'t render children when `cond` is false', () => {
    const wrapper = shallow((
      <RenderIf cond={R.identity(false)}>
        {children}
      </RenderIf>
    ));

    expect(wrapper.contains(<div />)).to.be.false;
  });
});
