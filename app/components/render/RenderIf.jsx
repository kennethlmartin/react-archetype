/**
 * @module app/components/render/RenderIf
 */

import PropTypes from 'prop-types';

const RenderIf = ({ children, cond }) => {
  if (!cond) {
    return null;
  }

  return children;
};

RenderIf.propTypes = {
  children: PropTypes.node,
  cond: PropTypes.any,
};

export default RenderIf;
