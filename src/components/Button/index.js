import React from "react";
import { darken } from "polished";

import { Wrapper, Arrow } from "./styles";

const Button = ({ as, content, colors, ...props }) => {
  if (!content || !content.path || !content.text) {
    return null;
  }

  if (!content.path) {
    return (
      <Wrapper as="button" colors={colors} {...props}>
        {content.text}
        <Arrow>→</Arrow>
      </Wrapper>
    );
  }

  if (
    content.path.startsWith("https://") ||
    content.path.startsWith("http://")
  ) {
    return (
      <Wrapper
        as="a"
        colors={colors}
        target="_blank"
        href={content.path}
        {...props}
      >
        {content.text}
        <Arrow>→</Arrow>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      as={as}
      colors={colors}
      duration={0.6}
      to={content.path}
      href={as === "a" && content.path}
      bg={colors ? darken(0.1, colors.dark) : "black"}
      {...props}
    >
      {content.text}
      <Arrow>→</Arrow>
    </Wrapper>
  );
};

export default Button;
