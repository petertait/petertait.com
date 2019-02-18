import React from "react";
import FitText from "react-fittext";
import { transparentize } from "polished";

import { H1 } from "components/Text";
import Button from "components/Button";

import { Wrapper, Inner } from "./styles";

const HeroBlock = ({ content, bg, color, width, maxWidth }) => {
  return (
    <Wrapper bg={bg} width={width} maxWidth={maxWidth}>
      <Inner
        bg={bg}
        color={color}
        width={width}
        maxWidth={maxWidth}
        image={content.background && content.background.relativePath}
      >
        <FitText minFontSize={80} maxFontSize={110}>
          <H1>{content.heading}</H1>
        </FitText>
        {content.subheading && (
          <FitText minFontSize={80} maxFontSize={110}>
            <H1
              color={transparentize(1, "white")}
              textStroke={`1px ${transparentize(0.5, "white")}`}
            >
              {content.subheading}
            </H1>
          </FitText>
        )}
        <Button mt="100px" content={content.button} />
      </Inner>
    </Wrapper>
  );
};

export default HeroBlock;
