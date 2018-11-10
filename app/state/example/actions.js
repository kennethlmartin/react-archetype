/**
 * @module app/state/example/actions
 */

import { actionTypes } from './constants';
import { createAction } from 'app/state/actions';

export const exampleAction = () => (
  createAction(actionTypes.EXAMPLE)
);
