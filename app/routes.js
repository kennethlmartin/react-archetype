/**
 * @module app/routes
 */

import HomePage from 'app/pages/Home';
import ExamplePage from 'app/pages/Example';
import ExampleNestedPage from 'app/pages/Example/ExampleNested';

export default [{
  component: HomePage,
  exact: true,
  id: 'HOME',
  path: '/',
}, {
  component: ExamplePage,
  id: 'EXAMPLE',
  path: '/example',
  routes: [{
    component: ExampleNestedPage,
    exact: true,
    id: 'EXAMPLE_NESTED',
    path: '/example/nested',
  }],
}];
