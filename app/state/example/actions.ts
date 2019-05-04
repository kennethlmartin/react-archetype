/**
 * @module app/state/example/actions
 */

import actionTypes from './types';
import { createAction } from 'app/state/actions';

export const fetchExample = () => (
  createAction(actionTypes.FETCH)
);
