/**
 * @module app/pages/NotFound
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch } from 'react-router-dom';

import './NotFound.pcss';
import Link from 'app/containers/Link';
import RouteWithStatus from 'app/components/utilities/RouteWithStatus';

const NotFoundPage = () => (
  <Switch>
    <RouteWithStatus statusCode={404}>
      <Fragment>
        <Helmet>
          <title>{'NotFoundPage'}</title>
          <body id="not-found-page" />
        </Helmet>
        <h1>
          {'NotFoundPage'}
        </h1>
        <Link route="HOME">
          {'Go Home'}
        </Link>
      </Fragment>
    </RouteWithStatus>
  </Switch>
);

export default NotFoundPage;
