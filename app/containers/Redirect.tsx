/**
 * @module app/containers/Redirect
 */

import React from 'react';
import { pick } from 'ramda';
import { connect } from 'react-redux';
import { Location } from 'history';
import { Redirect, withRouter } from 'react-router-dom';

import { getRoute } from 'app/state/routes/selectors';
import { buildPathParams, buildQueryString } from 'app/state/router/utilities';

interface OwnProps {
  location: Location,
  params: [],
  preserveQuery: boolean,
  query: object,
  route: string,
}

interface StateProps {
  pathname: string,
}

type Props = OwnProps & StateProps

const RedirectProps: Array<any> = [
  'to',
  'push',
  'from',
  'exact',
  'strict',
];

const RedirectContainer = ({
  location,
  params,
  pathname,
  preserveQuery,
  query,
  ...props
}: Props) => (
  <Redirect
    {...pick(RedirectProps, props)}
    to={{
      pathname: pathname + buildPathParams(params),
      search: preserveQuery ? location.search : buildQueryString(query),
    }}
  />
);

const mapStateToProps = (state: any, { route }: OwnProps): StateProps => ({
  pathname: getRoute(state, route),
});

const ConnectComponent: React.ReactType = connect(mapStateToProps)(RedirectContainer);
export default withRouter(ConnectComponent);
