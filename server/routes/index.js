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
 * Mount App routes
 */
const routes = [
  require('./healthcheck'),
  require('./app'),
];

R.forEach(route => {
  router.use(route.routes());
}, routes);
