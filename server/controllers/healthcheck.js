/**
 * @module server/controllers/healthcheck
 */

exports.get = async ctx => {
  ctx.body = 'ENABLED: Site is ok';
};
