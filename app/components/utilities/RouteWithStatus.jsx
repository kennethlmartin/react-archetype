/**
 * @module app/components/utilities/RouteWithStatus
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithStatus = ({ children, status }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = status;
      }
      return children;
    }}
  />
);

RouteWithStatus.propTypes = {
  children: PropTypes.node.isRequired,
  status: PropTypes.number.isRequired,
};

export default RouteWithStatus;
