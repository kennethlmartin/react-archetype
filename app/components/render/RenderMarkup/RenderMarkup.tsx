/**
 * @module app/components/render/RenderMarkup
 */

import React from 'react';

type Props = {
  html: string;
  tag: string;
};

const RenderMarkup = ({ html, tag, ...props }: Props) => (
  React.createElement(tag, {
    ...props,
    dangerouslySetInnerHTML: { __html: html },
  })
);

RenderMarkup.defaultProps = {
  tag: 'div',
};

export default RenderMarkup;
