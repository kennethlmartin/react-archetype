/**
 * @module server
 */

/* eslint-disable no-console */
console.time('start time');

const chalk = require('chalk');
const R = require('ramda');
const Table = require('easy-table');

require('@babel/polyfill');
require('@babel/register')({ cache: true });
require('ignore-styles');

const app = require('server/app');
const config = require('config');
const pkg = require('package.json');

const printServerInfo = () => {
  const { basePath, hostname, port } = config.get('app');

  console.log(' ');
  console.log(chalk.bold.green('✔ '), chalk.bold(pkg.name));
  console.log(chalk.dim('* '), chalk.underline(`${hostname}:${port}${basePath}`));
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

  console.log(chalk.dim(t.print()));
  console.timeEnd('start time');
};

app.listen(config.get('app.port'), printServerInfo);
