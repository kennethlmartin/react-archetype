/**
 * @module server/app
 */

const Boom = require('boom');
const compress = require('koa-compress');
const Koa = require('koa');
const koaReactViews = require('koa-react-view');
const mount = require('koa-mount');
const serve = require('koa-static');
const session = require('koa-session');

const config = require('config');
const errorHandler = require('server/middleware/error-handler');
const router = require('server/routes');
const { isDevelopment } = require('server/utilities');

var app;
module.exports = app = new Koa();

// Trust proxy header fields
app.proxy = true;

// Signed cookie keys
app.keys = config.get('cookieKeys');

// Cookie-based session middleware
app.use(session(config.get('cookieSession'), app));

// Error handler middleware
app.use(errorHandler);

// Use react for view templates
koaReactViews(app, {
  cache: !isDevelopment(config.get('env')),
  views: config.get('dirs.app'),
});

// Compress responses
app.use(compress({
  flush: require('zlib').Z_SYNC_FLUSH,
}));

// Static file serving middleware
app.use(
  mount(config.get('app.assetsPath'),
    serve(config.get('dirs.build'), { maxage: config.get('cookieSession.maxAge') }),
  ),
);

// Mount routes
app.use(
  router.routes(),
  router.allowedMethods({
    methodNotAllowed: () => new Boom.methodNotAllowed(),
    notImplemented: () => new Boom.notImplemented(),
    throw: true,
  }),
);
