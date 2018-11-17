/**
 * @module server/middleware/preload-state
 */

const config = require('config');

module.exports = async (ctx, next) => {
  ctx.preloadedState = {
    app: {
      basename: config.get('app.basePath'),
      basePath: config.get('app.basePath'),
    },
  };

  return next();
};
