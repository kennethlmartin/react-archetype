/**
 * @module app/routes
 */

import React from 'react';
import { LoadableComponent } from '@loadable/component';

import HomePage from 'app/pages/Home';
import ExamplePage from 'app/pages/Example';
import ExampleNestedPage from 'app/pages/Example/ExampleNested';
import LoginPage from 'app/pages/Login';

export interface RouteInterface {
  component: LoadableComponent<any> | React.ReactType;
  exact?: boolean;
  id: string;
  isBare?: boolean;
  path: string;
  routes?: RouteInterface[];
}

/**
 * Application route definitions
 *
 * @type {Array.<Object>}
 * @property {Function|Class} component - react component to render
 * @property {boolean} exact - exact match on path exactly
 * @property {string} id - used to reference the route
 * @property {boolean} isBare - should the header/footer be rendered
 * @property {string} path - url path
 * @property {Array} routes - nested route definitions
 */
const routes: RouteInterface[] = [{
  component: HomePage,
  exact: true,
  id: 'HOME',
  path: '/',
}, {
  component: LoginPage,
  exact: true,
  id: 'LOGIN',
  isBare: true,
  path: '/login',
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

export default routes;
