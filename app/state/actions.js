/**
 * @module app/state/actions
 */

import * as R from 'ramda';
import { put } from 'redux-saga/effects';

/**
 * Create a new redux action
 *
 * @function
 * @param {string} type - action type
 * @param {Object} payload - action payload
 * @returns {Object} - this will be passed to the reducer
 */
export const createAction = (type, payload = {}) => ({ type, ...payload });

/**
 * Create a redux actionTypes object
 *
 * @function
 * @param {string} namespace - namespace for the actionTypes
 * @param {Array} types - list of actionTypes
 * @returns {Object} - actionTypes with namespaced values
 */
export const createActionTypes = (namespace, types) => R.compose(
  R.zipObj(types),
  R.map(i => `@app/${namespace}/${i}`),
)(types);

/**
 * Create a new redux action from redux-saga
 *
 * @function
 * @param {string} type - action type
 * @param {Object} payload - action payload
 * @returns {Object} - this will be passed to the reducer
 */
export const sagaAction = R.compose(put, createAction);
