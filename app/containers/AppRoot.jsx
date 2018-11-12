/**
 * @module app/containers/AppRoot
 */

import * as R from 'ramda';
import Helmet from 'react-helmet';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, withRouter } from 'react-router-dom';

import NotFoundPage from 'app/pages/NotFound';
import routes from 'app/routes';
import { RouteWithSubRoutes, ScrollToTop } from 'app/components/utilities';

class AppRoot extends Component {
  constructor(props) {
    super(props);
  }

  renderSubRoute(route, i) {
    return (
      <RouteWithSubRoutes key={i} {...route} />
    );
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <title>{'Archetype Title'}</title>
        </Helmet>
        <ScrollToTop>
          <Switch key="root-content-switch">
            {
              routes.map(this.renderSubRoute)
            }
            <Route component={NotFoundPage} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}

export default R.compose(hot(module), withRouter)(AppRoot);
