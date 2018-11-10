/**
 * @module app/state/router/utilities
 */

import Qs from 'qs';
import * as R from 'ramda';
import { push } from 'connected-react-router';

export const joinPathParams = params => params ? `/${params.join('/')}` : '';
export const stringifyQuery = query => query ? `?${Qs.stringify(query)}` : '';

export const transitionTo = ({ pathname, pathParams, query }) => push({
  pathname: pathname + joinPathParams(pathParams),
  search: stringifyQuery(query),
});

export const parseQueryString = R.compose(
  Qs.parse,
  R.replace('?', ''),
);

export const buildQueryString = R.compose(
  R.join(''),
  R.concat('?'),
  Qs.stringify,
);
