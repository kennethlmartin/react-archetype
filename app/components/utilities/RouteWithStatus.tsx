/**
 * @module app/components/utilities/RouteWithStatus
 */

import React, { ReactElement } from 'react';
import { Route } from 'react-router-dom';

type Props = {
  children: ReactElement;
  statusCode: number;
};

const RouteWithStatus = ({ children, statusCode }: Props) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = statusCode;
      }

      return children;
    }}
  />
);

export default RouteWithStatus;
