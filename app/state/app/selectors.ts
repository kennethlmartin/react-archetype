/**
 * @module app/state/app/selectors
 */

import { createSelector } from 'reselect';
import { prop } from 'ramda';

const getRoot = prop('app');

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
export const getAppBasePath = createSelector(getApp, prop('basePath'));
