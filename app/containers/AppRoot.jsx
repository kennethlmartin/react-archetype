/**
 * @module app/containers/AppRoot
 */

import * as R from 'ramda';
import Helmet from 'react-helmet-async';
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
        <Helmet
          defaultTitle="React Archetype"
          titleTemplate="%s | React Archetype"
        />
        <ScrollToTop>
          <Switch key="root-content-switch">
            {
              routes.map(this.renderSubRoute)
            }
            <Route render={props => <NotFoundPage {...props} />} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}

export default R.compose(hot(module), withRouter)(AppRoot);
