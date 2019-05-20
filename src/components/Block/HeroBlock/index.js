import React from "react";

import Button from "components/Button";
import { H1 } from "components/Text";

import { Wrapper, Inner } from "./styles";

const HeroBlock = ({ colors, content, width, maxWidth }) => {
  return (
    <Wrapper
      colors={colors}
      width={width}
      maxWidth={maxWidth}
      shade={content.shade}
    >
      <Inner
        colors={colors}
        width={width}
        maxWidth={maxWidth}
        shade={content.shade}
      >
        {content.heading && (
          <H1 colors={colors} shade={content.shade}>
            {content.heading}
          </H1>
        )}
        {content.subheading && (
          <H1 outline colors={colors} shade={content.shade}>
            {content.subheading}
          </H1>
        )}
        <Button
          cover
          colors={colors}
          shade={content.shade}
          content={content.button}
        />
      </Inner>
    </Wrapper>
  );
};

export default HeroBlock;
