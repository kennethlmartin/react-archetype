/**
 * @module server
 */

/* eslint-disable no-console */
console.time('start time');

const R = require('ramda');
const Table = require('easy-table');
const { bold, dim, green, underline } = require('colorette');

require('@babel/polyfill');
require('@babel/register')({ cache: true });
require('ignore-styles');

const app = require('server/app');
const config = require('config');
const pkg = require('package.json');

const printServerInfo = () => {
  const { basePath, hostname } = config.get('app');

  console.log(' ');
  console.log(R.compose(bold, green)('✔ '), bold(pkg.name));
  console.log(dim('* '), underline(hostname + basePath));
  console.log('');

  const t = new Table;
  const parsedConfig = JSON.parse(config.toString());
  const data = [
    'env',
    'webpack.enabled',
  ];

  data.forEach(i => {
    const value = R.path(i.split('.'), parsedConfig);

    if (value) {
      t.cell('item', i);
      t.cell('value', value);
      t.newRow();
    }
  });

  console.log(dim(t.print()));
  console.timeEnd('start time');
  console.log('');
};

app.listen(config.get('app.port'), printServerInfo);
