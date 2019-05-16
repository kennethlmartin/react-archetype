/**
 * @module app/components/render/RenderIf
 */

import { FunctionComponent, Component } from 'react';

type Props = {
  cond: boolean;
  children(): void;
}

const RenderIf = ({ children, cond }: Props) => (
  cond ? children() : null
);

export default RenderIf;
