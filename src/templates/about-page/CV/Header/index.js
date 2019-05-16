import React from "react";
import { useMedia } from "react-use";

import theme from "config/theme";
import { H3 } from "components/Text";
import Button from "components/Button";
import { Container, Column } from "components/Grid";

import { Wrapper, Title, CloseButton, Text } from "./styles";

const Header = ({ content, colors, onClose }) => {
  const isTablet = useMedia(`(min-width: ${theme.size.tablet})`);
  return (
    <Wrapper>
      <CloseButton onClick={onClose} colors={colors}>
        <span />
      </CloseButton>
      <Title>{content.heading}</Title>
      <Container>
        <Column width={["100%", "40%"]} pr={["0", theme.gutter.medium]}>
          <H3>{content.summary.heading}</H3>
          {isTablet && (
            <Button
              cover
              mt="30px"
              size="small"
              shade="dark"
              colors={colors}
              content={content.summary.button}
              to={content.summary.button.file.relativePath}
            />
          )}
        </Column>
        <Column width={["100%", "60%"]}>
          <Text content={content.summary.text} />
          {!isTablet && (
            <Button
              cover
              mt="30px"
              size="small"
              shade="dark"
              colors={colors}
              content={content.summary.button}
              to={content.summary.button.file.relativePath}
            />
          )}
        </Column>
      </Container>
    </Wrapper>
  );
};

export default Header;
