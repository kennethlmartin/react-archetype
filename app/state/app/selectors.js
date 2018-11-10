/**
 * @module app/state/app/selectors
 */

import * as R from 'ramda';
import { createSelector } from 'reselect';

const getRoot = R.prop('app');
export const getApp = getRoot;
export const getBasename = createSelector(getApp, R.prop('basename'));
