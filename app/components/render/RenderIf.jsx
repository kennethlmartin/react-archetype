/**
 * @module app/components/render/RenderIf
 */

import PropTypes from 'prop-types';

const RenderIf = ({ cond, render }) => (
  cond ? render() : null
);

RenderIf.propTypes = {
  cond: PropTypes.any,
  render: PropTypes.func,
};

export default RenderIf;
