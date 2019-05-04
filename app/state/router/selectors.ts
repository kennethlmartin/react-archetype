/**
 * @module app/state/router/selectors
 */

import { createSelector } from 'reselect';
import { prop } from 'ramda';

const getRoot = prop('router');

/**
 * Get the router state slice
 *
 * @function
 * @param {Object} state - redux state
 * @returns {Object} - router
 */
export const getRouter = getRoot;

/**
 * Get the router location
 *
 * @function
 * @param {Object} state - redux state
 * @returns {Object} - router location
 */
export const getRouterLocation = createSelector(getRoot, prop('location'));
