/**
 * @module app/state/example/sagas
 */

/* eslint-disable no-console */

import { all, takeLatest } from 'redux-saga/effects';

import actionTypes from './types';
import { sagaAction } from '../actions';

function* fetch() {
  try {
    console.log('fetching example');
    yield sagaAction(actionTypes.FETCHING);

    yield console.log('example fetched');
    yield sagaAction(actionTypes.FETCH_SUCCESS, { data: [1, 2, 3] });
  } catch (error) {
    yield sagaAction(actionTypes.FETCH_FAILED);
  }
}

export default function* exampleSaga() {
  yield all([
    takeLatest(actionTypes.FETCH, fetch),
  ]);
}
