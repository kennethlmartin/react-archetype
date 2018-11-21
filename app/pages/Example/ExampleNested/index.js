import loadable from '@loadable/component';

export default loadable(() => import(
  /* webpackChunkName: "example-nested" */
  './ExampleNested',
));
