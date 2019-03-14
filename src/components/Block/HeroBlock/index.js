import React from "react";

import Button from "components/Button";
import { H1 } from "components/Text";

import { Wrapper, Inner } from "./styles";

const HeroBlock = ({ content, colors, width, maxWidth }) => {
  return (
    <Wrapper
      width={width}
      colors={colors}
      maxWidth={maxWidth}
      shade={content.shade}
    >
      <Inner
        width={width}
        colors={colors}
        maxWidth={maxWidth}
        shade={content.shade}
        image={content.background && content.background.relativePath}
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
