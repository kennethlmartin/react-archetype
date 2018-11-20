/**
 * @module server/utilities
 */

const R = require('ramda');

/**
 * Environment
 */
exports.isDevelopment = R.equals('development');
exports.isProduction = R.equals('production');
exports.isStaging = R.equals('staging');
exports.isTest = R.equals('test');

/**
 * HTTP status codes
 */
exports.is404Error = R.equals(404);
exports.is4xxError = R.allPass([R.flip(R.gte)(400), R.flip(R.lt)(500)]);
exports.is5xxError = R.allPass([R.flip(R.gte)(500), R.flip(R.lt)(600)]);
