/**
 * @module server/routes/app
 */

const React = require('react');
const Router = require('koa-router');
const { ChunkExtractor, ChunkExtractorManager } = require('@loadable/server');
const { createMemoryHistory } = require('history');
const { HelmetProvider } = require('react-helmet-async');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router');

const AppRoot = require('app/containers/AppRoot').default;
const config = require('config');
const { configureStore } = require('app/state/store');
const { preloadState, assetManifest } = require('server/middleware');

let router;
module.exports = router = new Router();

// Middleware
router.use(
  assetManifest(),
  preloadState(),
);

router.get('*', async (ctx) => {
  const extractor = new ChunkExtractor({ stats: ctx.assetManifest });
  const helmetContext = {};
  const history = createMemoryHistory();
  const routerContext = {};
  const store = configureStore(history, ctx.preloadedState);

  const markup = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <Provider store={store}>
        <HelmetProvider context={helmetContext}>
          <StaticRouter
            basename={config.get('app.basePath')}
            context={routerContext}
            location={ctx.request.url}
          >
            <AppRoot />
          </StaticRouter>
        </HelmetProvider>
      </Provider>
    </ChunkExtractorManager>,
  );

  if (routerContext.status) {
    ctx.status = routerContext.status;
  }

  if (routerContext.url) {
    ctx.redirect(routerContext.url);
  } else {
    ctx.render('Server', {
      assets: {
        scripts: extractor.getScriptElements(),
        styles: extractor.getStyleElements(),
      },
      helmet: helmetContext.helmet,
      markup,
      preloadedState: store.getState(),
    });
  }
});
