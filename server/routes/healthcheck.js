/**
 * @module server/routes/healthcheck
 */

const Router = require('koa-router');

let router;
module.exports = router = new Router();

router.get('/healthcheck', async (ctx) => {
  ctx.body = 'ENABLED: Site is ok';
});
