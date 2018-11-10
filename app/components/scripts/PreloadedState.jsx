/**
 * @module app/components/scripts/PreloadedState
 */

import PropTypes from 'prop-types';
import React from 'react';

import RenderScript from 'app/components/render/RenderScript';

export const PreloadedState = ({ state }) => (
  <RenderScript>
    {`window.__PRELOADED_STATE__ = ${JSON.stringify(state)}`}
  </RenderScript>
);

PreloadedState.propTypes = {
  state: PropTypes.object.isRequired,
};

export default PreloadedState;
