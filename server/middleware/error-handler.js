/**
 * @module server/middleware/error-handler
 */

const Boom = require('boom');
const { is5xxError } = require('server/utilities');

module.exports = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    const status = err.status || 500;

    ctx.status = status;
    ctx.body = Boom.boomify(err, { statusCode: status }).output.payload;

    if (is5xxError(status)) {
      console.log(err); // eslint-disable-line no-console
    }
  }
};
