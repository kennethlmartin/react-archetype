/**
 * @module app/state/routes/utilities
 */

import * as R from 'ramda';

export const mapRoutes = R.reduce((result, item) => (
  R.assoc(item.id, item.path, result)
), {});
