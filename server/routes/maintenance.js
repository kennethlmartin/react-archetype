/**
 * @module server/routes/maintenance
 */

const React = require('react');
const Router = require('koa-router');
const { renderToStaticMarkup } = require('react-dom/server');

const config = require('config');

let router;
module.exports = router = new Router();

router.get(config.get('app.maintenance.path'), async ctx => {
  const html = (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body>
        <div>{'maintenance page'}</div>
      </body>
    </html>
  );

  ctx.body = `<!doctype html>\n${renderToStaticMarkup(html)}`;
});
