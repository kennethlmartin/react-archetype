/**
 * @module app/components/RenderScript
 */

import PropTypes from 'prop-types';
import React from 'react';

/* eslint-disable react/no-danger */
const RenderScript = ({ async, children, ...props }) => {
  if (children) {
    return <script dangerouslySetInnerHTML={{ __html: children }} />;
  }

  return <script async={async} {...props} />;
};

RenderScript.propTypes = {
  children: PropTypes.string,
};

RenderScript.defaultProps = {
  async: true,
};

export default RenderScript;
