/**
 * @module app/containers/Redirect
 */

import React from 'react';
import { compose, keys, pick, prop } from 'ramda';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { getRoutes } from 'app/state/routes/selectors';
import { buildPathParams, buildQueryString } from 'app/state/router/utilities';

type Props = {
  location: object,
  params: [],
  pathname: string,
  preserveQuery: boolean,
  query: object,
}

const RedirectContainer = ({ location, params, pathname, preserveQuery, query, ...props }: Props) => (
  <Redirect
    {...pick(keys(Redirect.propTypes), props)}
    to={{
      pathname: pathname + buildPathParams(params),
      search: preserveQuery ? location.search : buildQueryString(query),
    }}
  />
);

const mapStateToProps = (state, { route }) => ({
  pathname: compose(prop(route), getRoutes)(state),
});

export default compose(withRouter, connect(mapStateToProps))(RedirectContainer);
