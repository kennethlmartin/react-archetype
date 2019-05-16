/**
 * @module app/components/utilities/RouteWithSubRoutes
 */

import React from 'react';
import { Route } from 'react-router-dom';

import { RouteInterface } from 'app/routes';

const RouteWithSubRoutes = ({ component: Component, routes, ...props }: RouteInterface) => (
  <Route
    render={renderProps => (
      <Component {...renderProps} routes={routes} />
    )}
    {...props}
  />
);

export default RouteWithSubRoutes;
