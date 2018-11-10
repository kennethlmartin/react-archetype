/**
 * @module app/components/RenderScript
 */

import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable react/no-danger */
const RenderScript = ({ children, ...props }) => {
  if (children) {
    return <script dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <script {...props} />;
};

RenderScript.propTypes = {
  children: PropTypes.string,
};

export default RenderScript;
