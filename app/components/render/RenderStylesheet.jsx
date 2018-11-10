/**
 * @module app/components/render/RenderStylesheet
 */

import PropTypes from 'prop-types';
import React from 'react';

const RenderStylesheet = ({ href }) => (
  <link href={href} rel="stylesheet" type="text/css" />
);

RenderStylesheet.propTypes = {
  href: PropTypes.string.isRequired,
};

export default RenderStylesheet;
