/**
 * @module app/state/example/selectors
 */

import * as R from 'ramda';
import { createSelector } from 'reselect';

const getRoot = R.prop('example');
export const getExample = getRoot;
export const getExampleKey = createSelector(getRoot, R.prop('exampleKey'));
