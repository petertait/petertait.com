import React from "react";
import { useMedia } from "react-use";
import { transparentize } from "polished";

import theme from "config/theme";
import { H3 } from "components/Text";
import Button from "components/Button";
import { Grid, Container, Column } from "components/Grid";

import { Title, CloseButton, Text } from "./styles";

const Header = ({ content, colors, onClose }) => {
  const isTablet = useMedia(`(min-width: ${theme.size.tablet})`);
  return (
    <>
      <Grid
        mb="80px"
        pb="80px"
        px={theme.gutter.medium}
        borderBottom={`1px solid ${transparentize(0.9, colors.light)}`}
      >
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
            <Text
              dangerouslySetInnerHTML={{
                __html: content.summary.text
              }}
            />
            {!isTablet && (
              <Button
                cover
                mt="50px"
                size="small"
                shade="dark"
                colors={colors}
                content={content.summary.button}
                to={content.summary.button.file.relativePath}
              />
            )}
          </Column>
        </Container>
      </Grid>
    </>
  );
};

export default Header;
