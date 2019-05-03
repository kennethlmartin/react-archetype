/**
 * @module server/utilities.spec
 */

const utilities = require('server/utilities');

describe('Server / Utilities', () => {
  describe('isDevelopment()', () => {
    it('should be true if development', () => {
      expect(utilities.isDevelopment('development')).to.be.true;
    });

    it('should be false if not development', () => {
      expect(utilities.isDevelopment('foo')).to.be.false;
    });
  });

  describe('isStaging()', () => {
    it('should be true if staging', () => {
      expect(utilities.isStaging('staging')).to.be.true;
    });

    it('should be false if not staging', () => {
      expect(utilities.isStaging('foo')).to.be.false;
    });
  });

  describe('isProduction()', () => {
    it('should be true if production', () => {
      expect(utilities.isProduction('production')).to.be.true;
    });

    it('should be false if not production', () => {
      expect(utilities.isProduction('foo')).to.be.false;
    });
  });

  describe('isTest()', () => {
    it('should be true if test', () => {
      expect(utilities.isTest('test')).to.be.true;
    });

    it('should be false if not test', () => {
      expect(utilities.isTest('foo')).to.be.false;
    });
  });
});
