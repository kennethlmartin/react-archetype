/**
 * @module app/containers/Link
 */

import cx from 'classnames';
import React, { Component } from 'react';
import { pick } from 'ramda';
import { connect } from 'react-redux';
import { Location } from 'history';
import { NavLink, withRouter } from 'react-router-dom';

import { getRoute } from 'app/state/routes/selectors';
import { buildWithParams, buildQueryString } from 'app/state/router/utilities';

interface OwnProps {
  children: Component,
  className: string,
  disabled: boolean,
  location: Location,
  newTab: boolean,
  params: [] | object,
  preserveQuery: boolean,
  query: object,
  route: string,
}

interface StateProps {
  pathname: string,
}

type Props = OwnProps & StateProps

const NavLinkProps: Array<any> = [
  'activeClassName',
  'activeStyle',
  'aria-current',
  'exact',
  'innerRef',
  'isActive',
  'location',
  'onClick',
  'replace',
  'strict',
  'style',
  'to',
];

const LinkContainer = ({
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
    {...pick(NavLinkProps, props)}
    className={cx('nav-link', className, { disabled })}
    target={newTab ? '_blank' : undefined}
    to={{
      pathname: buildWithParams(pathname, params),
      search: preserveQuery ? location.search : buildQueryString(query),
    }}
  >
    {children}
  </NavLink>
);

const mapStateToProps = (state: any, { route }: OwnProps): StateProps => ({
  pathname: getRoute(state, route),
});

const ConnectComponent: React.ReactType = connect(mapStateToProps)(LinkContainer);
export default withRouter(ConnectComponent);
