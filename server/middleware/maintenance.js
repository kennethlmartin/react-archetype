/**
 * @module server/middleware/maintenance
 */

const config = require('config');

module.exports = function maintenance() {
  return async (ctx, next) => {
    const isEnabled = config.get('app.maintenance.enabled');
    const path = config.get('app.maintenance.path');

    if (isEnabled && ctx.url !== path) {
      ctx.status = 302;
      ctx.redirect(path);
    } else {
      return next();
    }
  };
};
