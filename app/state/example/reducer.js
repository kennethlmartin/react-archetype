/**
 * @module app/state/example/reducer
 */

import { createReducer } from 'app/state/reducers';
import actionTypes from './types';

const INITIAL_STATE = {
  isFetching: true,
  items: [],
};

const fetching = state => ({
  ...state,
  isFetching: true,
});

const fetchFailed = state => ({
  ...state,
  isFetching: false,
});

const fetchSuccess = (state, action) => ({
  ...state,
  isFetching: false,
  items: action.data,
});

export default createReducer(INITIAL_STATE, {
  [actionTypes.FETCHING]: fetching,
  [actionTypes.FETCH_FAILED]: fetchFailed,
  [actionTypes.FETCH_SUCCESS]: fetchSuccess,
});
