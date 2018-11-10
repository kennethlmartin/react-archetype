/**
 * @module app/pages/NotFound
 */

import React from 'react';
import { Switch } from 'react-router-dom';

import './NotFound.css';
import Link from 'app/containers/Link';
import RouteWithStatus from 'app/components/utilities/RouteWithStatus';

const NotFoundPage = () => (
  <Switch>
    <RouteWithStatus status={404}>
      <section id="not-found-page">
        <h1>
          {'NotFoundPage'}
        </h1>
        <Link route="HOME_PAGE">
          {'Link to HomePage'}
        </Link>
      </section>
    </RouteWithStatus>
  </Switch>
);

export default NotFoundPage;
