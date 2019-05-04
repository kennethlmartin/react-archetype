import loadable from '@loadable/component';

export default loadable(() => import(
  /* webpackChunkName: "example" */
  './ExampleNested' /* eslint-disable-line comma-dangle */
));
