/**
 * @module app/containers/AppRoot
 */

import * as R from 'ramda';
import Helmet from 'react-helmet-async';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';

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
      <Fragment>
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
      </Fragment>
    );
  }
}

AppRoot.propTypes = {
  metaTitle: PropTypes.string,
};

AppRoot.defaultProps = {
  metaTitle: 'React Archetype',
};

export default R.compose(hot(module))(AppRoot);
