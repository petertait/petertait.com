import React from "react";

import { Wrapper, Svg } from "./styles.js";

import Icons from "./Icons";

const Icon = ({ title, icon, size, width, height, ...rest }) => {
  if (!icon) {
    return null;
  }

  const IconPath = Icons[icon];

  if (!IconPath) {
    console.log(`Icon missing: ${icon}`);
    return null;
  }

  return (
    <Wrapper {...rest}>
      <Svg viewBox="0 0 32 32" size={size} width={width} height={height}>
        {title && <title>{title}</title>}
        <IconPath />
      </Svg>
    </Wrapper>
  );
};

export default Icon;
