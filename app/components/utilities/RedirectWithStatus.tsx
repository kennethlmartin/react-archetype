/**
 * @module app/components/utilities/RedirectWithStatus
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export interface RedirectWithStatusProps {
  from: string;
  to: string | object;
  status: number;
}

const RedirectWithStatus = ({ from, to, status }: RedirectWithStatusProps) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = status;
      }

      return <Redirect from={from} to={to} />;
    }}
  />
);

export default RedirectWithStatus;
