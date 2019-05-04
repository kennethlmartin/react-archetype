import loadable from '@loadable/component';

export default loadable(() => import(
  /* webpackChunkName: "example" */
  './Example' /* eslint-disable-line comma-dangle */
));
