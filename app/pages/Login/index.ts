import loadable from '@loadable/component';

export default loadable(() => import(
  /* webpackChunkName: "login" */
  './Login' /* eslint-disable-line comma-dangle */
));
