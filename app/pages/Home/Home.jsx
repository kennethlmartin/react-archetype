/**
 * @module app/pages/Home
 */

import React from 'react';

import './Home.css';
import Link from 'app/containers/Link';

const HomePage = () => (
  <section id="home-page">
    <h1>
      {'HomePage'}
    </h1>
    <Link route="EXAMPLE_PAGE">
      {'Link to ExamplePage'}
    </Link>
  </section>
);

export default HomePage;
