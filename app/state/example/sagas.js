/**
 * @module app/state/example/sagas
 */

/* eslint-disable no-console */

import { all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from './constants';

function* example() {
  try {
    yield console.log('example saga');
  } catch (error) {
    console.log(error);
  }
}

export default function* exampleSaga() {
  yield all([
    takeLatest(actionTypes.EXAMPLE, example),
  ]);
}
