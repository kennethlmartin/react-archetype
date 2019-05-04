/**
 * @module app/components/utilities/RouteWithSubRoutes
 */

import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';

export interface RouteWithSubRoutesProps {
  component: ReactElement;
  routes: object;
}

const RouteWithSubRoutes = ({ component: Component, routes, ...props }: RouteWithSubRoutesProps) => (
  <Route
    render={renderProps => (
      <Component {...renderProps} routes={routes} />
    )}
    {...props}
  />
);

export default RouteWithSubRoutes;
