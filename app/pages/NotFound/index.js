import loadable from '@loadable/component';

export default loadable(() => import(
  /* webpackChunkName: "not-found" */
  './NotFound' /* eslint-disable-line comma-dangle */
));
