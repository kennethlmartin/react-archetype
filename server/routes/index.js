/**
 * @module server/routes
 */

const R = require('ramda');
const Router = require('koa-router');

const config = require('config');

let router;
module.exports = router = new Router({
  prefix: config.get('app.basePath'),
});

/**
 * Mount routes
 */
R.forEach(route => {
  router.use(route.routes());
}, [
  require('./healthcheck'),
  require('./maintenance'),
  require('./app'),
]);
