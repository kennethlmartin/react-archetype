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
 * Create a new redux action from redux-saga
 *
 * @function
 * @param {string} type - action type
 * @param {Object} payload - action payload
 * @returns {Object} - this will be passed to the reducer
 */
export const sagaAction = R.compose(put, createAction);
