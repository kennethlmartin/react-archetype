/**
 * @module app/components/render/RenderIf
 */

type Props = {
  cond: boolean;
  children(): void;
};

const RenderIf = ({ children, cond }: Props) => (
  cond ? children() : null
);

export default RenderIf;
