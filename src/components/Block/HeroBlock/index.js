import React from "react";
import FitText from "react-fittext";
import { transparentize } from "polished";

import Button from "components/Button";
import { H1 } from "components/Text";

import { Wrapper, Inner } from "./styles";

const HeroBlock = ({ shade, content, color, width, maxWidth }) => {
  return (
    <Wrapper shade={shade} color={color} width={width} maxWidth={maxWidth}>
      <Inner
        shade={shade}
        color={color}
        width={width}
        maxWidth={maxWidth}
        image={content.background && content.background.relativePath}
      >
        {content.heading && (
          <FitText minFontSize={80} maxFontSize={110}>
            <H1 shade={shade} color={color}>
              {content.heading}
            </H1>
          </FitText>
        )}
        {content.subheading && (
          <FitText minFontSize={80} maxFontSize={110}>
            <H1 outline shade={shade} color={color}>
              {content.subheading}
            </H1>
          </FitText>
        )}
        <Button
          mt="100px"
          shade={shade}
          color={color}
          content={content.button}
        />
      </Inner>
    </Wrapper>
  );
};

export default HeroBlock;
