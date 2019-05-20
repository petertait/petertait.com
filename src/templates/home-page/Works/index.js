import React from "react";
import { useMedia } from "react-use";

import theme from "config/theme";
import Button from "components/Button";
import { Column } from "components/Grid";
import { Header, Heading, Subheading } from "components/Block";

import Work from "./Work";
import { Inner } from "./styles";

const Works = ({ content, colors }) => {
  const isTablet = useMedia(`(min-width: ${theme.size.tablet})`);
  return (
    <>
      <Header>
        {(content.heading || content.subheading) && (
          <Column flex="1" width="auto" justifyContent="center">
            {content.heading && <Heading>{content.heading}</Heading>}
            {content.subheading && <Subheading content={content.subheading} />}
          </Column>
        )}
        {isTablet && (
          <Button
            size="small"
            colors={colors}
            shade={content.shade}
            content={content.button}
          />
        )}
      </Header>
      <Inner>
        {content.work.map((content, index) => (
          <Work content={content} key={index} colors={colors} />
        ))}
      </Inner>
      {!isTablet && (
        <Button
          mt="40px"
          size="small"
          colors={colors}
          shade={content.shade}
          content={content.button}
        />
      )}
    </>
  );
};

export default Works;
