/**
 * @module app/components/utilities/RenderWithCond
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

const RenderWithCond = ({ children, cond, ...props }) => (
  <Route
    {...props}
    component={false}
    render={() => cond || children}
  />
);

RenderWithCond.propTypes = {
  children: PropTypes.node,
  cond: PropTypes.bool,
};

export default RenderWithCond;
