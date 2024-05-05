import { FC } from "react";

import { IconNames } from "assets/icons/names";
import sprite from "assets/icons/sprite.svg";

type TSvgIcon = {
  name: `${IconNames}`;
  viewBox?: string;
  w?: string;
  h?: string;
  background?: string;
  color?: string;
  fillColor?: string;
  stroke?: string;
  strokeWidth?: string;
};

const Icon: FC<TSvgIcon> = ({ name, viewBox = "0 0 24 24", w = "24px", h = "24px", ...rest }) => {
  const spriteName = `${sprite}?v=${Date.now()}+#${name}`;

  return (
    <svg aria-label="icon-component" viewBox={viewBox} height={h} width={w} {...rest}>
      <use href={spriteName} />
    </svg>
  );
};

export default Icon;
