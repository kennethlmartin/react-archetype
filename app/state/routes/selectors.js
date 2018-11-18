/**
 * @module app/state/routes/selectors
 */

import * as R from 'ramda';

const getRoot = R.prop('routes');

/**
 * Get the routes state slice
 *
 * @function
 * @param {Object} state
 * @returns {Object}
 */
export const getRoutes = getRoot;

/**
 * Get a specific route
 *
 * @function
 * @param {Object} state
 * @param {string} route
 * @returns {string}
 */
export const getRoute = (state, route) => (
  R.compose(R.prop(route), getRoutes)(state)
);
