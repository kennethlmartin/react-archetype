/**
 * @module app/components/utilities/RouteWithSubRoutes
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Route } from 'react-router-dom';

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => (
      <route.component {...props} routes={route.routes} />
    )}
  />
);

RouteWithSubRoutes.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string.isRequired,
};

export default RouteWithSubRoutes;
