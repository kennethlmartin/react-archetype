/**
 * @module app/pages/ExampleNested
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

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
