/**
 * @module app/components/utilities/RenderWithCond
 */

import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';

type Props = {
  children: ReactElement;
  cond: boolean | undefined;
}

const RenderWithCond = ({ children, cond, ...props }: Props) => (
  <Route
    {...props}
    component={undefined}
    render={() => cond || children}
  />
);

export default RenderWithCond;
