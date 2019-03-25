import loadable from '@loadable/component';

export default loadable(() => import(
  /* webpackChunkName: "home" */
  './Home' /* eslint-disable-line comma-dangle */
));
