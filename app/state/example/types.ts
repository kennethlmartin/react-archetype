/**
 * @module app/state/example/types
 */

import { createActionTypes } from 'app/state/actions';

const actionTypes = [
  'FETCH',
  'FETCH_FAILED',
  'FETCH_SUCCESS',
  'FETCHING',
];

export default createActionTypes('example', actionTypes);
