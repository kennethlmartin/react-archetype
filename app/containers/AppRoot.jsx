/**
 * @module app/containers/AppRoot
 */

import * as R from 'ramda';
import Helmet from 'react-helmet-async';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, withRouter } from 'react-router-dom';

import NotFoundPage from 'app/pages/NotFound';
import routes from 'app/routes';
import { RouteWithSubRoutes, ScrollToTop } from 'app/components/utilities';

class AppRoot extends Component {
  renderSubRoute(route, i) {
    return (
      <RouteWithSubRoutes key={i} {...route} />
    );
  }

  render() {
    return (
      <div>
        <Helmet
          defaultTitle={this.props.metaTitle}
          titleTemplate={`%s | ${this.props.metaTitle}`}
        />
        <ScrollToTop />
        <Switch key="root-content-switch">
          {
            routes.map(this.renderSubRoute)
          }
          <Route render={props => <NotFoundPage {...props} />} />
        </Switch>
      </div>
    );
  }
}

AppRoot.propTypes = {
  metaTitle: PropTypes.string,
};

AppRoot.defaultProps = {
  metaTitle: 'React Archetype',
};

export default R.compose(hot(module), withRouter)(AppRoot);
