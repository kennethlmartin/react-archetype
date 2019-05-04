/**
 * @module app/components/render/RenderMarkup
 */

import PropTypes from 'prop-types';
import React from 'react';

export interface RenderMarkupProps {
  html: string;
  tag: string;
}

/* eslint-disable react/no-danger */
const RenderMarkup = ({ html, tag: Tag, ...props }: RenderMarkupProps) => (
  <Tag {...props} dangerouslySetInnerHTML={{ __html: html }} />
);

RenderMarkup.defaultProps = {
  tag: 'div',
};

export default RenderMarkup;
