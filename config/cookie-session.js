/**
 * @module config/cookie-session
 */

module.exports = {
  key: {
    default: 'archetype:sess',
    format: String,
  },
  maxAge: {
    default: 2592000000,
    format: Number,
  },
  renew: {
    default: true,
    format: Boolean,
  },
};
