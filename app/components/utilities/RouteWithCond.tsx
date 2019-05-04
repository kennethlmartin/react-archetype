/**
 * @module app/components/utilities/RenderWithCond
 */

import React, { Component, ReactElement } from 'react';
import { Route } from 'react-router-dom';

export interface RenderWithCondProps {
  children: ReactElement;
  cond: boolean | undefined;
}

const RenderWithCond = ({ children, cond, ...props }: RenderWithCondProps) => (
  <Route
    {...props}
    component={undefined}
    render={() => cond || children}
  />
);

export default RenderWithCond;
