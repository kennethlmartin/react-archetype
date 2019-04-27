/**
 * @module config/cookie-session
 */

module.exports = {
  key: {
    default: 'react-archetype:sess',
    doc: 'cookie key',
    format: String,
  },
  maxAge: {
    default: 2592000000,
    doc: 'cookie age in ms',
    format: Number,
  },
  renew: {
    default: true,
    doc: 'renew session when session is nearly expired',
    format: Boolean,
  },
};
