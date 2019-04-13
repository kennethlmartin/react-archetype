/**
 * @module app/state/app/selectors
 */

import * as R from 'ramda';
import { createSelector } from 'reselect';

const getRoot = R.prop('app');

/**
 * Get the app state slice
 *
 * @function
 * @param {Object} state - redux state
 * @returns {Object}
 */
export const getApp = getRoot;

/**
 * Get the app base path
 *
 * @function
 * @param {Object} state - redux state
 * @returns {string}
 */
export const getAppBasePath = createSelector(getApp, R.prop('basePath'));
