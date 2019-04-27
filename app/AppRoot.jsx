/**
 * @module app/AppRoot
 */

import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { hot } from 'react-hot-loader/root';
import { Route, Switch } from 'react-router-dom';

import NotFoundPage from 'app/pages/NotFound';
import PrimaryFooter from 'app/components/sections/PrimaryFooter';
import PrimaryHeader from 'app/components/sections/PrimaryHeader';
import routes from 'app/routes';
import RouteWithCond from 'app/components/utilities/RouteWithCond';
import RouteWithSubRoutes from 'app/components/utilities/RouteWithSubRoutes';
import ScrollToTop from 'app/components/utilities/ScrollToTop';

const AppRoot = ({ metaTitle }) => (
  <Fragment>
    <Helmet
      defaultTitle={metaTitle}
      titleTemplate={`%s | ${metaTitle}`}
    />
    <ScrollToTop />
    <Switch>
      {routes.map((route, i) => (
        <RouteWithCond {...route} cond={route.isBare} key={i}>
          <PrimaryHeader />
        </RouteWithCond>
      ))}
    </Switch>
    <main role="main">
      <Switch key="root-content-switch">
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <Route render={renderProps => <NotFoundPage {...renderProps} />} />
      </Switch>
    </main>
    <Switch>
      {routes.map((route, i) => (
        <RouteWithCond {...route} cond={route.isBare} key={i}>
          <PrimaryFooter />
        </RouteWithCond>
      ))}
    </Switch>
  </Fragment>
);

AppRoot.propTypes = {
  metaTitle: PropTypes.string,
};

AppRoot.defaultProps = {
  metaTitle: 'react-archetype',
};

export default hot(AppRoot);
