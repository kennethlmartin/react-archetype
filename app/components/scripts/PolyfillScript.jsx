/**
 * @module app/components/scripts/PolyfillScript
 */

import React from 'react';
import RenderScript from 'app/components/render/RenderScript';

const PolyfillScript = () => (
  <RenderScript src={'https://cdn.polyfill.io/v2/polyfill.min.js'} />
);

export default PolyfillScript;
