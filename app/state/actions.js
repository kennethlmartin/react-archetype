/**
 * @module app/state/actions
 */

import * as R from 'ramda';
import { put } from 'redux-saga/effects';

export const createAction = (type, payload = {}) => ({ type, ...payload });
export const sagaAction = R.compose(put, createAction);
