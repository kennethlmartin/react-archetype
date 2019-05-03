/**
 * @module server/utilities
 */

const R = require('ramda');

/**
 * Node Environment
 */
exports.isDevelopment = R.equals('development');
exports.isProduction = R.equals('production');
exports.isStaging = R.equals('staging');
exports.isTest = R.equals('test');
