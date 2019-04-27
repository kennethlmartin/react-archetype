/**
 * @module server/routes/healthcheck
 */

const Router = require('koa-router');
const controller = require('server/controllers/healthcheck');

let router;
module.exports = router = new Router();

router.get('/healthcheck', controller.get);
