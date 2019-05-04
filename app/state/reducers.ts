/**
 * @module app/state/reducers
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

import { reducer as app } from './app';
import { reducer as example } from './example';
import { reducer as routes } from './routes';

/**
 * Create reducer for store
 *
 * @function
 * @param {Object|Array|string} initialState - initial state
 * @param {Object} handlers - action handlers
 * @returns {Object} - state reducer
 */
export function createReducer(initialState: object, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    }

    return state;
  };
}

/**
 * Create the root reducer for store
 *
 * @function
 * @param {Object} history - react-router history object
 * @returns {Object} - root reducer
 */
export const createRootReducer = (history: History) => combineReducers({
  app,
  example,
  router: connectRouter(history),
  routes,
});
