/**
 * @module app/state/routes/utilities
 */

import * as R from 'ramda';

/**
 * Takes our primary routes configuration and converts
 * it to an object with key/values of <ID>:<PATH>
 *
 * @function
 * @param {Array} routes - route configuration
 * @returns {Object} - <ID>:<PATH>
 */
export const mapRoutes = R.reduce((acc, item) => {
  if (item.routes) {
    acc = { ...acc, ...mapRoutes(item.routes) };
  }

  if (!item.id) {
    return acc;
  }

  return R.assoc(item.id, item.path, acc);
}, {});
