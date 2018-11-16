/**
 * @module app/components/render/RenderMarkup
 */

import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable react/no-danger */
const RenderMarkup = ({ html, tag: Tag, ...props }) => (
  <Tag {...props} dangerouslySetInnerHTML={{ __html: html }} />
);

RenderMarkup.propTypes = {
  html: PropTypes.string.isRequired,
  tag: PropTypes.string,
};

RenderMarkup.defaultProps = {
  tag: 'div',
};

export default RenderMarkup;
