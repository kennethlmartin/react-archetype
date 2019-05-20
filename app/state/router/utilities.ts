/**
 * @module app/state/router/utilities
 */

import * as R from 'ramda';
import Qs from 'qs';
import { push } from 'connected-react-router';

/**
 * Build path parameters from an array
 *
 * @function
 * @param {Array} params - array of params
 * @returns {string} - joined params as a path
 */
export const buildPathParams = R.cond([
  [R.isNil, R.always('')],
  [R.isEmpty, R.always('')],
  [R.T, R.compose(R.concat('/'), R.join('/'))],
]);

/**
 * Build pathname with path parameters
 *
 * @function
 * @param {Object} pathname - pathname
 * @param {Array} params - array of params
 * @returns {string} - joined params as a path
 */
export const buildWithParams = R.curry((pathname, params) => {
  if (R.isNil(params)) {
    return pathname;
  }

  if (R.is(Array, params)) {
    return pathname + buildPathParams(params);
  }

  for (const k in params) {
    pathname = R.replace(`:${k}`, R.prop(k, params), pathname);
  }

  return pathname;
});

/**
 * Build query string from an object
 *
 * @function
 * @param {Object} query - object query
 * @returns {string} - stringified query
 */
export const buildQueryString = R.cond([
  [R.isNil, R.always('')],
  [R.isEmpty, R.always('')],
  [R.T, R.compose(R.concat('?'), Qs.stringify)],
]);

/**
 * Parse a query string
 *
 * @function
 * @param {string} query - query string to parse
 * @returns {Object} - parsed query string
 */
export const parseQueryString = R.compose(Qs.parse, R.replace('?', ''));

/**
 * Navigate to new url
 *
 * @function
 * @param {Object} obj - navigation object
 * @param {string} obj.pathname - pathname to navigate to
 * @param {string} obj.params - used to `buildPathParams`
 * @param {string} obj.query - used to `buildQueryString`
 * @returns {*} - react-router push event
 */
export const navigateTo = ({ pathname, params, query }: NavigateToInterface) => push({
  pathname: pathname + buildPathParams(params),
  search: buildQueryString(query),
});

interface NavigateToInterface {
  pathname: string;
  params: string;
  query: object;
}
