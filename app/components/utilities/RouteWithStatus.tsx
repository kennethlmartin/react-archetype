/**
 * @module app/components/utilities/RouteWithStatus
 */

import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';

export interface RouteWithStatusProps {
  children: ReactElement;
  status: number;
}

const RouteWithStatus = ({ children, status }: RouteWithStatusProps) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = status;
      }

      return children;
    }}
  />
);

export default RouteWithStatus;
