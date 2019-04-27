/**
 * @module server/controllers/maintenance
 */

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

exports.get = async ctx => {
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
};
