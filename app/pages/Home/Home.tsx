/**
 * @module app/pages/Home
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import './Home.pcss';
import Link from 'app/containers/Link';

const HomePage = () => (
  <Fragment>
    <Helmet>
      <body id="home-page" />
    </Helmet>
    <h1>
      {'HomePage'}
    </h1>
    <div className="navigation">
      <Link route="LOGIN">
        {'Go Login'}
      </Link>
      <Link route="EXAMPLE">
        {'Go Example'}
      </Link>
    </div>
  </Fragment>
);

export default HomePage;
