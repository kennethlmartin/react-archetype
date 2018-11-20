/**
 * @module server/routes/app
 */

const React = require('react');
const Router = require('koa-router');
const R = require('ramda');
const { createMemoryHistory } = require('history');
const { HelmetProvider } = require('react-helmet-async');
const { LoadableState, LoadableStateManager } = require('@loadable/server');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router');

const AppRoot = require('app/containers/AppRoot').default;
const config = require('config');
const webpackConstants = require('webpack/webpack.constants');
const { buildAssetPaths } = require('server/utilities');
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
  const helmetContext = {};
  const history = createMemoryHistory();
  const loadableState = new LoadableState();
  const routerContext = {};
  const store = configureStore(history, ctx.preloadedState);

  const markup = renderToString(
    <LoadableStateManager state={loadableState}>
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
    </LoadableStateManager>,
  );

  const assetBundles = R.pick([
    ...loadableState.getChunks(), // Async bundles
    ...R.values(webpackConstants.BUNDLES), // Initial bundles
  ])(ctx.assetManifest);

  if (routerContext.status) {
    ctx.status = routerContext.status;
  }

  if (routerContext.url) {
    ctx.redirect(routerContext.url);
  } else {
    ctx.render('Server', {
      assets: {
        scripts: buildAssetPaths('js', assetBundles),
        styles: buildAssetPaths('css', assetBundles),
      },
      helmet: helmetContext.helmet,
      markup,
      preloadedState: store.getState(),
    });
  }
});
