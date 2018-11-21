/**
 * @module app/pages/Example
 */

import Helmet from 'react-helmet-async';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';

import './Example.css';
import Link from 'app/containers/Link';
import { RouteWithSubRoutes } from 'app/components/utilities';

const ExamplePage = ({ routes }) => (
  <Fragment>
    <Helmet>
      <title>{'ExamplePage'}</title>
      <body id="example-page" />
    </Helmet>
    <h1>
      {'ExamplePage'}
    </h1>
    <div className="navigation">
      <Link route="HOME">
        {'Go Home'}
      </Link>
      <Link route="EXAMPLE_NESTED">
        {'Go Example Nested'}
      </Link>
    </div>
    {
      routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route} />
      ))
    }
  </Fragment>
);

ExamplePage.propTypes = {
  routes: PropTypes.array,
};

export default ExamplePage;
