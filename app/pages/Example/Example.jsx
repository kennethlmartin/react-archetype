/**
 * @module app/pages/Example
 */

import React from 'react';

import './Example.css';
import Link from 'app/containers/Link';

const ExamplePage = () => (
  <section id="example-page">
    <h1>
      {'ExamplePage'}
    </h1>
    <Link route="HOME_PAGE">
      {'Link to HomePage'}
    </Link>
  </section>
);

export default ExamplePage;
