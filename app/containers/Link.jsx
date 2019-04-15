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
import { buildWithParams, buildQueryString } from 'app/state/router/utilities';

const Link = ({
  children,
  className,
  disabled,
  location,
  newTab,
  params,
  pathname,
  preserveQuery,
  query,
  ...props
}) => (
  <NavLink
    {...R.pick(R.keys(NavLink.propTypes), props)}
    className={cx('nav-link', className, { disabled })}
    target={newTab ? '_blank' : null}
    to={{
      pathname: buildWithParams(pathname, params),
      search: preserveQuery ? location.search : buildQueryString(query),
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
  params: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  preserveQuery: PropTypes.bool,
  query: PropTypes.object,
};

const mapStateToProps = (state, { route }) => ({
  pathname: R.compose(R.prop(route), getRoutes)(state),
});

export default R.compose(withRouter, connect(mapStateToProps))(Link);
