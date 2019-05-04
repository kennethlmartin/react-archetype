/**
 * @module app/state/routes/selectors
 */

import * as R from 'ramda';

const getRoot = R.prop('routes');

/**
 * Get all routes
 *
 * @function
 * @param {Object} state - redux state
 * @returns {Object} - routes
 */
export const getRoutes = getRoot;

/**
 * Get a specific route
 *
 * @function
 * @param {Object} state - redux state
 * @param {string} route - route name
 * @returns {string} - specfic route
 */
export const getRoute = (state: object, route: string) => (
  R.compose(R.prop(route), getRoutes)(state)
);
