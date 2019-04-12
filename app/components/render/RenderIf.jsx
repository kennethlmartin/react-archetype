/**
 * @module app/components/render/RenderIf
 */

import PropTypes from 'prop-types';

const RenderIf = ({ children, cond }) => (
  cond ? children() : null
);

RenderIf.propTypes = {
  children: PropTypes.func,
  cond: PropTypes.any,
};

export default RenderIf;
