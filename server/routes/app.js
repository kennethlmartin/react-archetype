/**
 * @module server/routes/app
 */


const Router = require('koa-router');
const controller = require('server/controllers/app');

const { assetManifest, preloadState } = require('server/middleware');

let router;
module.exports = router = new Router();

router.use(
  assetManifest(),
  preloadState(),
);

router.get('*', controller.get);
