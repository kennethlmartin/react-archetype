/**
 * @module app/state/example/reducer
 */

import actionTypes from './types';
import { createReducer } from 'app/state/reducers';

const INITIAL_STATE = {
  isFetching: true,
  items: [],
};

const fetching = (state: object) => ({
  ...state,
  isFetching: true,
});

const fetchFailed = (state: object) => ({
  ...state,
  isFetching: false,
});

type FetchSuccessAction = {
  data: object,
}

const fetchSuccess = (state: object, action: FetchSuccessAction) => ({
  ...state,
  isFetching: false,
  items: action.data,
});

export default createReducer(INITIAL_STATE, {
  [actionTypes.FETCHING]: fetching,
  [actionTypes.FETCH_FAILED]: fetchFailed,
  [actionTypes.FETCH_SUCCESS]: fetchSuccess,
});
