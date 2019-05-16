/**
 * @module app/components/utilities/RedirectWithStatus
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';

type Props = {
  from: string;
  to: string | object;
  statusCode: number;
}

const RedirectWithStatus = ({ from, to, statusCode }: Props) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.statusCode = statusCode;
      }

      return <Redirect from={from} to={to} />;
    }}
  />
);

export default RedirectWithStatus;
