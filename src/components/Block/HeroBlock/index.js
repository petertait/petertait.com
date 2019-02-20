import React from "react";

import Button from "components/Button";
import { H1 } from "components/Text";

import { Wrapper, Inner } from "./styles";

const HeroBlock = ({ content, color, width, maxWidth }) => {
  return (
    <Wrapper
      color={color}
      width={width}
      maxWidth={maxWidth}
      shade={content.shade}
    >
      <Inner
        color={color}
        width={width}
        maxWidth={maxWidth}
        shade={content.shade}
        image={content.background && content.background.relativePath}
      >
        {content.heading && (
          <H1 color={color} shade={content.shade}>
            {content.heading}
          </H1>
        )}
        {content.subheading && (
          <H1 outline color={color} shade={content.shade}>
            {content.subheading}
          </H1>
        )}
        <Button
          cover
          mt="100px"
          color={color}
          shade={content.shade}
          content={content.button}
        />
      </Inner>
    </Wrapper>
  );
};

export default HeroBlock;
