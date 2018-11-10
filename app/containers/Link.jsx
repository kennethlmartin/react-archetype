/**
 * @module app/containers/Link
 */

import * as R from 'ramda';
import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { getRoutes } from 'app/state/routes/selectors';
import { joinPathParams, stringifyQuery } from 'app/state/router/utilities';

const Link = ({
  children,
  className,
  disabled,
  location,
  newTab,
  params,
  preserveQuery,
  query,
  route,
  routes,
  ...props
}) => (
  <NavLink
    {...R.pick(R.keys(NavLink.propTypes), props)}
    className={cx(className, { disabled })}
    target={newTab ? '_blank' : null}
    to={{
      pathname: R.prop(route, routes) + joinPathParams(params),
      search: preserveQuery ? location.search : stringifyQuery(query),
    }}
  >
    {children}
  </NavLink>
);

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  location: PropTypes.object,
  newTab: PropTypes.bool,
  params: PropTypes.array,
  preserveQuery: PropTypes.bool,
  query: PropTypes.object,
  route: PropTypes.string.isRequired,
  routes: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  routes: getRoutes(state),
});

export default R.compose(withRouter, connect(mapStateToProps))(Link);
