/**
 * @module app/containers/Redirect
 */

import * as R from 'ramda';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

import { getRoutes } from 'app/state/routes/selectors';
import { joinPathParams, stringifyQuery } from 'app/state/router/utilities';

const RedirectContainer = ({ location, params, pathname, preserveQuery, query, ...props }) => (
  <Redirect
    {...R.pick(R.keys(Redirect.propTypes), props)}
    to={{
      pathname: pathname + joinPathParams(params),
      search: preserveQuery ? location.search : stringifyQuery(query),
    }}
  />
);

RedirectContainer.propTypes = {
  location: PropTypes.object,
  params: PropTypes.array,
  pathname: PropTypes.string,
  preserveQuery: PropTypes.bool,
  query: PropTypes.object,
};

const mapStateToProps = (state, { route }) => ({
  pathname: R.compose(R.prop(route), getRoutes)(state),
});

export default R.compose(withRouter, connect(mapStateToProps))(RedirectContainer);
