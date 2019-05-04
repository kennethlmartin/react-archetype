/**
 * @module app/components/elements/Button
 */

import cx from 'classnames';
import React, { MouseEvent } from 'react';

import './Button.pcss';

export interface ButtonProps {
  children: string;
  disabled?: boolean;
  onClick(e: MouseEvent<HTMLElement>): void;
}

const Button = ({ children, disabled, onClick }: ButtonProps) => (
  <button
    className={cx('button')}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
