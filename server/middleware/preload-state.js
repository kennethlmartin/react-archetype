/**
 * @module server/middleware/preload-state
 */

const config = require('config');

module.exports = async (ctx, next) => {
  ctx.preloadedState = {
    app: {
      basePath: config.get('app.basePath'),
    },
  };

  return next();
};
