/**
 * @module app/pages/Home
 */

import Helmet from 'react-helmet-async';
import React, { Fragment } from 'react';

import './Home.css';
import Link from 'app/containers/Link';

const HomePage = () => (
  <Fragment>
    <Helmet>
      <body id="home-page" />
    </Helmet>
    <h1>
      {'HomePage'}
    </h1>
    <Link route="EXAMPLE">
      {'Go Example'}
    </Link>
  </Fragment>
);

export default HomePage;
