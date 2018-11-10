/**
 * @module server/routes/app
 */

const React = require('react');
const Router = require('koa-router');
const R = require('ramda');
const { createMemoryHistory } = require('history');
const { Helmet } = require('react-helmet');
const { LoadableState, LoadableStateManager } = require('@loadable/server');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router');

const AppRoot = require('app/containers/AppRoot').default;
const config = require('config');
const middleware = require('server/middleware');
const webpackConstants = require('webpack/webpack.constants');
const { buildAssetPaths } = require('server/utilities');
const { configureStore } = require('app/state/store');

let router;
module.exports = router = new Router();

router.use(
  middleware.preloadState,
  middleware.loadAssetManifest,
);

router.get('*', async (ctx) => {
  const context = {};
  const loadableState = new LoadableState();
  const history = createMemoryHistory();
  const store = configureStore(history, ctx.preloadedState);

  const markup = renderToString(
    <LoadableStateManager state={loadableState}>
      <Provider store={store}>
        <StaticRouter
          basename={config.get('app.basePath')}
          context={context}
          location={ctx.request.url}
        >
          <AppRoot />
        </StaticRouter>
      </Provider>
    </LoadableStateManager>,
  );

  const assetBundles = R.pick([
    ...loadableState.getChunks(), // async bundles
    ...R.values(webpackConstants.BUNDLES), // initial bundles
  ])(ctx.assetManifest);

  if (context.status) {
    ctx.status = context.status;
  }

  if (context.url) {
    ctx.redirect(context.url);
  } else {
    ctx.render('Server', {
      assets: {
        scripts: buildAssetPaths('js', assetBundles),
        styles: buildAssetPaths('css', assetBundles),
      },
      helmet: Helmet.renderStatic(),
      markup,
      preloadedState: store.getState(),
    });
  }
});
