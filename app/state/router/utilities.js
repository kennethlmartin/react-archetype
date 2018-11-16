/**
 * @module app/state/router/utilities
 */

import Qs from 'qs';
import * as R from 'ramda';
import { push } from 'connected-react-router';

/**
 * Build path parameters from an array
 *
 * @param {Array} params - array of params
 * @returns {string} - joined params as a path
 */
export const buildPathParams = R.cond([
  [R.isNil, R.always('')],
  [R.isEmpty, R.always('')],
  [R.T, R.compose(R.concat('/'), R.join('/'))],
]);

/**
 * Build query string from an object
 *
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
 * @param {string} query - query string to parse
 * @returns {Object} - parsed query string
 */
export const parseQueryString = R.compose(Qs.parse, R.replace('?', ''));

/**
 * Navigate to new url
 *
 * @param {string} pathname - pathname to navigate to
 * @param {Array} params - used to `buildPathParams`
 * @param {Object} query - used to `buildQueryString`
 * @returns {*}
 */
export const navigateTo = ({ pathname, params, query }) => push({
  pathname: pathname + buildPathParams(params),
  search: buildQueryString(query),
});
