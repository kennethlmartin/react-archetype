/**
 * @module app/state/router/utilities.spec
 */

import * as utilities from './utilities';

describe('State / Router / Utilities', () => {
  describe('buildPathParams()', () => {
    it('should be a string', () => {
      const pathParams = utilities.buildPathParams(['foo', 'bar']);
      expect(pathParams).to.be.an('string');
    });

    it('should be empty when array is empty', () => {
      const pathParams = utilities.buildPathParams([]);
      expect(pathParams).to.be.empty;
    });

    it('should be empty when null', () => {
      const pathParams = utilities.buildPathParams(null);
      expect(pathParams).to.be.empty;
    });

    it('should be formatted properly', () => {
      const pathParams = utilities.buildPathParams(['foo', 'bar']);
      expect(pathParams).to.equal('/foo/bar');
    });
  });

  describe('buildQueryString()', () => {
    it('should be a string', () => {
      const queryString = utilities.buildQueryString({ foo: 'bar' });
      expect(queryString).to.be.an('string');
    });

    it('should be empty when object is empty', () => {
      const queryString = utilities.buildQueryString({});
      expect(queryString).to.be.empty;
    });

    it('should be empty when null', () => {
      const queryString = utilities.buildQueryString(null);
      expect(queryString).to.be.empty;
    });

    it('should be formatted properly', () => {
      const queryString = utilities.buildQueryString({ bar: 'foo', foo: 'bar' });
      expect(queryString).to.equal('?bar=foo&foo=bar');
    });
  });

  describe('buildQueryString()', () => {
    it('should be an object', () => {
      const queryString = utilities.parseQueryString('?bar=foo&foo=bar');
      expect(queryString).to.be.an('object');
    });

    it('should be formatted properly', () => {
      const queryProperty = utilities.parseQueryString('?bar=foo&foo=bar');
      expect(queryProperty).to.deep.equal({ bar: 'foo', foo: 'bar' });
    });
  });

  describe('buildQueryString()', () => {
    it('should be an object', () => {
      const queryString = utilities.parseQueryString('?bar=foo&foo=bar');
      expect(queryString).to.be.an('object');
    });

    it('should be formatted properly', () => {
      const queryProperty = utilities.parseQueryString('?bar=foo&foo=bar');
      expect(queryProperty).to.deep.equal({ bar: 'foo', foo: 'bar' });
    });
  });
});
