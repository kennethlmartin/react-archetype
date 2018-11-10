/**
 * @module app/components/utilities/RedirectWithStatus
 */

import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const RedirectWithStatus = ({ from, to, status }) => (
  <Route
    render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = status;
      }

      return <Redirect from={from} to={to} />;
    }}
  />
);

RedirectWithStatus.propTypes = {
  from: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired,
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

export default RedirectWithStatus;
