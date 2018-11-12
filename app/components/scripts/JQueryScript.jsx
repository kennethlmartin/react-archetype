/**
 * @module app/components/scripts/JQueryScript
 */

import PropTypes from 'prop-types';
import React from 'react';

import RenderScript from 'app/components/render/RenderScript';

export const JQueryScript = ({ version }) => (
  <RenderScript src={`//ajax.googleapis.com/ajax/libs/jquery/${version}/jquery.min.js`} />
);

JQueryScript.propTypes = {
  version: PropTypes.string.isRequired,
};

export default JQueryScript;
