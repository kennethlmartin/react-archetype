/**
 * @module server/routes/maintenance
 */

const Router = require('koa-router');

const config = require('config');
const controller = require('server/controllers/maintenance');

let router;
module.exports = router = new Router();

router.get(config.get('app.maintenance.path'), controller.get);
