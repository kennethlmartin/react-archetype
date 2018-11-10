/**
 * @module app/state/routes/selectors
 */

import * as R from 'ramda';

export const getRoutes = R.prop('routes');

export const getRoute = (state, route) => (
  R.compose(R.prop(route), getRoutes)(state)
);
