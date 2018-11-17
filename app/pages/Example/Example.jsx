/**
 * @module app/pages/Example
 */

import React from 'react';
import Helmet from 'react-helmet-async';

import './Example.css';
import Link from 'app/containers/Link';

const ExamplePage = () => (
  <section id="example-page">
    <Helmet>
      <title>{'Example Page'}</title>
    </Helmet>
    <h1>
      {'ExamplePage'}
    </h1>
    <Link route="HOME_PAGE">
      {'Link to HomePage'}
    </Link>
  </section>
);

export default ExamplePage;
