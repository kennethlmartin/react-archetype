/**
 * @module app/AppRoot
 */

import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { hot } from 'react-hot-loader/root';
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
          <Route render={renderProps => <NotFoundPage {...renderProps} />} />
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

export default hot(AppRoot);
