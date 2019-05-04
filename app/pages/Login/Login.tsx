/**
 * @module app/pages/Login
 */

import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

import './Login.pcss';
import Link from 'app/containers/Link';

const LoginPage = () => (
  <Fragment>
    <Helmet>
      <title>{'LoginPage'}</title>
      <body id="login-page" />
    </Helmet>
    <h1>
      {'LoginPage'}
    </h1>
    <div className="navigation">
      <Link route="HOME">
        {'Go Home'}
      </Link>
    </div>
  </Fragment>
);

export default LoginPage;
