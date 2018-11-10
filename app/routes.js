/**
 * @module app/routes
 */

import HomePage from 'app/pages/Home';
import ExamplePage from 'app/pages/Example';

export default [{
  component: HomePage,
  exact: true,
  id: 'HOME_PAGE',
  path: '/',
}, {
  component: ExamplePage,
  id: 'EXAMPLE_PAGE',
  path: '/example',
}];
