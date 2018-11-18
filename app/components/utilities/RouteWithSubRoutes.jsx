/**
 * @module app/components/utilities/RouteWithSubRoutes
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = ({ component: Component, routes, ...props }) => (
  <Route
    render={renderProps => (
      <Component {...renderProps} routes={routes} />
    )}
    {...props}
  />
);

RouteWithSubRoutes.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

export default RouteWithSubRoutes;
