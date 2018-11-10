/**
 * @module app/state/sagas
 */

import { all, fork } from 'redux-saga/effects';
import example from './example/sagas';

export const rootSaga = function* rootSaga() {
  yield all([
    fork(example),
  ]);
};
