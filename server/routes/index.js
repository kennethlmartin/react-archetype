/**
 * @module server/routes
 */

const R = require('ramda');
const Router = require('koa-router');

const appRoute = require('./app');
const config = require('config');
const healthcheckRoute = require('./healthcheck');

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
  healthcheckRoute,
  appRoute,
]);
