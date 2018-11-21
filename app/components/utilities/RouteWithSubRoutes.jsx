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
  routes: PropTypes.array,
};

export default RouteWithSubRoutes;
