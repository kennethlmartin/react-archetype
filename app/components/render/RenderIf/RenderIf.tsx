/**
 * @module app/components/render/RenderIf
 */

import { FunctionComponent, Component } from 'react';

export interface RenderIfProps {
  cond: boolean;
  children(): void;
}

const RenderIf = ({ children, cond }: RenderIfProps) => (
  cond ? children() : null
);

export default RenderIf;
