/**
 * @module app/pages/NotFound
 */

import { Helmet } from 'react-helmet-async';
import React from 'react';
import { Switch } from 'react-router-dom';

import './NotFound.css';
import Link from 'app/containers/Link';
import RouteWithStatus from 'app/components/utilities/RouteWithStatus';

const NotFoundPage = () => (
  <Switch>
    <RouteWithStatus status={404}>
      <section id="not-found-page">
        <Helmet>
          <title>{'NotFoundPage'}</title>
        </Helmet>
        <h1>
          {'NotFoundPage'}
        </h1>
        <Link route="HOME_PAGE">
          {'Go Home'}
        </Link>
      </section>
    </RouteWithStatus>
  </Switch>
);

export default NotFoundPage;
