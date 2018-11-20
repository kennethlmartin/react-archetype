/**
 * @module app/state/example/selectors
 */

import * as R from 'ramda';
import { createSelector } from 'reselect';

const getRoot = R.prop('example');

/**
 * Get the example state slice
 *
 * @function
 * @param {Object} state - redux state
 * @returns {Object} - example
 */
export const getExample = getRoot;

/**
 * Get the example key
 *
 * @function
 * @param {Object} state - redux state
 * @returns {string} - example
 */
export const getExampleKey = createSelector(getRoot, R.prop('exampleKey'));
