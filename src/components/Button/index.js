import React from "react";
import { darken } from "polished";

import { Wrapper, Arrow } from "./styles";

const Button = ({ as, content, color, ...props }) => {
  if (!content || !content.path || !content.text) {
    return null;
  }

  if (!content.path) {
    return (
      <Wrapper as="button" color={color} {...props}>
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
        color={color}
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
      color={color}
      duration={0.6}
      to={content.path}
      href={as === "a" && content.path}
      bg={color ? darken(0.1, color.dark) : "black"}
      {...props}
    >
      {content.text}
      <Arrow>→</Arrow>
    </Wrapper>
  );
};

export default Button;
