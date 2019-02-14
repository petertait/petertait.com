import React from "react";

import { Wrapper, Arrow } from "./styles";

const Button = ({ as, to, shade, size, children, ...props }) => {
  if (!to) {
    return (
      <Wrapper as="button" shade={shade} size={size} {...props}>
        {children}
        <Arrow>→</Arrow>
      </Wrapper>
    );
  }

  if (to.startsWith("https://") || to.startsWith("http://")) {
    return (
      <Wrapper
        as="a"
        href={to}
        shade={shade}
        size={size}
        target="_blank"
        {...props}
      >
        {children}
        <Arrow>→</Arrow>
      </Wrapper>
    );
  }

  return (
    <Wrapper
      to={to}
      as={as}
      href={as === "a" && to}
      shade={shade}
      size={size}
      {...props}
    >
      {children}
      <Arrow>→</Arrow>
    </Wrapper>
  );
};

export default Button;
