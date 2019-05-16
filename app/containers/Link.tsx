/**
 * @module app/containers/Link
 */

import cx from 'classnames';
import React, { Component } from 'react';
import { compose, keys, pick, prop } from 'ramda';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';

import { getRoutes } from 'app/state/routes/selectors';
import { buildWithParams, buildQueryString } from 'app/state/router/utilities';

type Props = {
  children: Component,
  className: string,
  disabled: boolean,
  location: object,
  newTab: boolean,
  pathname: string,
  params: [] | object,
  preserveQuery: boolean,
  query: object,
}

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
}: Props) => (
  <NavLink
    {...pick(keys(NavLink.propTypes), props)}
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

const mapStateToProps = (state, { route }) => ({
  pathname: compose(prop(route), getRoutes)(state),
});

export default compose(withRouter, connect(mapStateToProps))(Link);
