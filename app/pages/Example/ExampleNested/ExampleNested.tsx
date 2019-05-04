/**
 * @module app/pages/Example/ExampleNested
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

import './ExampleNested.pcss';

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
