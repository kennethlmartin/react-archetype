/**
 * @module server/app
 */

const Boom = require('boom');
const compress = require('koa-compress');
const helmet = require('koa-helmet');
const Koa = require('koa');
const koaReactViews = require('koa-react-view');
const logger = require('koa-logger');
const mount = require('koa-mount');
const serve = require('koa-static');
const session = require('koa-session');
const slashes = require('koa-remove-trailing-slashes');

const config = require('config');
const errorHandler = require('server/middleware/error-handler');
const router = require('server/routes');
const { isDevelopment } = require('server/utilities');

var app;
module.exports = app = new Koa();

// Trust proxy header fields
app.proxy = true;

// Remove any trailing slashes
app.use(slashes());

// Request logging
app.use(logger());

// Security headers
app.use(helmet());

// Signed cookie keys
app.keys = config.get('cookieKeys');

// Cookie-based session middleware
app.use(session(config.get('cookieSession'), app));

// Compress responses
app.use(compress({
  flush: require('zlib').Z_SYNC_FLUSH,
}));

// Error handler middleware
app.use(errorHandler());

// Mount and server static files
app.use(
  mount(config.get('app.assetsPath'),
    serve(config.get('dirs.build'), { maxage: config.get('cookieSession.maxAge') }),
  ),
);

// Use react for view templates
koaReactViews(app, {
  cache: !isDevelopment(config.get('env')),
  views: config.get('dirs.app'),
});

// Mount routes
app.use(
  router.routes(),
  router.allowedMethods({
    methodNotAllowed: () => new Boom.methodNotAllowed(),
    notImplemented: () => new Boom.notImplemented(),
    throw: true,
  }),
);
