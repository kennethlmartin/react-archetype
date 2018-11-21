/**
 * @module app/pages/ExampleNested
 */

import Helmet from 'react-helmet-async';
import React from 'react';

import './ExampleNested.css';

const ExampleNestedPage = () => (
  <div id="example-nested-page">
    <Helmet>
      <title>{'ExampleNestedPage'}</title>
    </Helmet>
    <h2>
      {'ExampleNestedPage'}
    </h2>
  </div>
);

export default ExampleNestedPage;
