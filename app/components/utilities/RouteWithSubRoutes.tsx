/**
 * @module app/components/utilities/RouteWithSubRoutes
 */

import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';

type Props = {
  component: ReactElement;
  routes: object;
}

const RouteWithSubRoutes = ({ component: Component, routes, ...props }: Props) => (
  <Route
    render={renderProps => (
      <Component {...renderProps} routes={routes} />
    )}
    {...props}
  />
);

export default RouteWithSubRoutes;
