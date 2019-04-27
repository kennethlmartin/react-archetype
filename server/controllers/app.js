/**
 * @module server/controllers/app
 */

const MultiStream = require('multistream');
const React = require('react');
const stringToStream = require('string-to-stream');
const { ChunkExtractor, ChunkExtractorManager } = require('@loadable/server');
const { createMemoryHistory } = require('history');
const { getDataFromTree } = require('react-apollo');
const { HelmetProvider } = require('react-helmet-async');
const { Provider } = require('react-redux');
const { renderToNodeStream } = require('react-dom/server');
const { StaticRouter } = require('react-router');

const AppRoot = require('app/AppRoot').default;
const config = require('config');
const { configureStore } = require('app/state/store');

exports.get = async ctx => {
  const assetExtractor = new ChunkExtractor({ stats: ctx.assetManifest });
  const helmetContext = {};
  const routerContext = {};
  const history = createMemoryHistory({
    initialEntries: [ctx.url.replace(config.get('app.basePath'), '')],
  });
  const reduxStore = configureStore(history, ctx.preloadedState);

  const app = (
    <div id="app-root">
      <ChunkExtractorManager extractor={assetExtractor}>
        <Provider store={reduxStore}>
          <HelmetProvider context={helmetContext}>
            <StaticRouter
              basename={config.get('app.basePath')}
              context={routerContext}
              location={ctx.url}
            >
              <AppRoot />
            </StaticRouter>
          </HelmetProvider>
        </Provider>
      </ChunkExtractorManager>
    </div>
  );

  await getDataFromTree(app);

  if (routerContext.status) {
    ctx.status = routerContext.status;
  }

  if (routerContext.url) {
    ctx.redirect(routerContext.url);
  } else {
    ctx.type = 'html';
    ctx.body = MultiStream([
      stringToStream(`
        <!DOCTYPE html>
        <html lang="en" ${helmetContext.helmet.htmlAttributes.toString()}>
          <head>
            <meta charSet="utf-8" />
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            ${helmetContext.helmet.title.toString()}
            ${helmetContext.helmet.meta.toString()}
            ${helmetContext.helmet.link.toString()}
            ${assetExtractor.getStyleTags()}
          </head>
          <body ${helmetContext.helmet.bodyAttributes.toString()}>
      `),
      renderToNodeStream(app),
      stringToStream(`
            ${assetExtractor.getScriptTags()}
            <script>window.__PRELOADED_STATE__ = ${JSON.stringify(reduxStore.getState())}</script>
          </body>
        </html>
      `),
    ]);
  }
};
