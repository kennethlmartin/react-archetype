/**
 * @module app/state/reducers
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as app } from './app';
import { reducer as example } from './example';
import { reducer as routes } from './routes';

/**
 * Create the root reducer for redux
 *
 * @function
 * @param {Object} history - react-router history object
 * @returns {Object} - root reducer
 */
export const createRootReducer = history => combineReducers({
  app,
  example,
  router: connectRouter(history),
  routes,
});
