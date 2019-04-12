/**
 * @module app/state/router/utilities.spec
 */

import * as utilities from './utilities';

describe('State / Routes / Utilities', () => {
  describe('mapRoutes()', () => {
    const routes = [{
      id: 'ONE',
      path: '/one',
    }, {
      id: 'TWO',
      path: '/two',
      routes: [{
        id: 'TWO_NESTED',
        path: '/two/nested',
      }],
    }, {
      path: '/three',
      routes: [{
        id: 'THREE',
        path: '/three',
      }, {
        id: 'THREE_NESTED',
        path: '/three/nested',
      }, {
        id: 'THREE_IGNORE',
      }],
    }];

    it('should be properly formatted', () => {
      const mappedRoutes = utilities.mapRoutes(routes);

      expect(mappedRoutes).to.be.an('object').to.deep.equal({
        ONE: '/one',
        THREE: '/three',
        THREE_NESTED: '/three/nested',
        TWO: '/two',
        TWO_NESTED: '/two/nested',
      });
    });
  });
});
