/**
 * @module server/utilities.spec
 */

const utilities = require('server/utilities');

describe('Utilities - Node Environment', () => {
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

describe('Utilities - HTTP Status Codes', function() {
  describe('is404Error()', () => {
    it('should be true if 404', () => {
      expect(utilities.is404Error(404)).to.be.true;
    });

    it('should be false if not 404', () => {
      expect(utilities.is404Error(200)).to.be.false;
    });
  });

  describe('is4xxError()', () => {
    it('should be true when 4xx', () => {
      const statusCodes = [401, 403, 404, 405, 406, 408];

      for (const code of statusCodes) {
        expect(utilities.is4xxError(code)).to.be.true;
      }
    });

    it('should be false when not 4xx', () => {
      const statusCodes = [200, 302, 500];

      for (const code of statusCodes) {
        expect(utilities.is4xxError(code)).to.be.false;
      }
    });
  });

  describe('is5xxError()', () => {
    it('should be true when 5xx', () => {
      const statusCodes = [500, 501, 502, 503, 504];

      for (const code of statusCodes) {
        expect(utilities.is5xxError(code)).to.be.true;
      }
    });

    it('should be false when not 5xx', () => {
      const statusCodes = [200, 302, 401];

      for (const code of statusCodes) {
        expect(utilities.is5xxError(code)).to.be.false;
      }
    });
  });
});
