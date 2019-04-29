/**
 * @module app/components/elements/Button
 */

import cx from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import './Button.pcss';

const Button = ({ children, disabled, onClick }) => (
  <button
    className={cx('button')}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
