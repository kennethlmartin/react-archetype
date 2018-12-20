/**
 * @module app/state/router/selectors
 */

import * as R from 'ramda';
import { createSelector } from 'reselect';

const getRoot = R.prop('router');

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
export const getRouterLocation = createSelector(getRoot, R.prop('location'));
