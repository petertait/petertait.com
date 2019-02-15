import React from "react";

import Grid from "components/Grid";

import HeroBlock from "./HeroBlock";

import { Wrapper, Title } from "./styles";

const Block = ({ title, children, ...props }) => {
  return (
    <Wrapper {...props}>
      {title && <Title>{title}</Title>}
      <Grid>{children}</Grid>
    </Wrapper>
  );
};

export default Block;
export { HeroBlock };
