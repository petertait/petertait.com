import React from "react";

import theme from "config/theme";
import { H3, H4 } from "components/Text";
import Button from "components/Button";
import Grid, { Container, Column } from "components/Grid";

import { Title, CloseButton, Date, Text } from "./styles";

const Header = ({ content, colors, onClose }) => {
  return (
    <>
      <Grid>
        <CloseButton onClick={onClose} colors={colors}>
          <span />
        </CloseButton>
        <Title>{content.heading}</Title>
        <Container>
          <Column width="40%" pr={["0", theme.gutter.medium]}>
            <H3>{content.summary.heading}</H3>
            <Button
              cover
              mt="30px"
              size="small"
              shade="dark"
              colors={colors}
              content={content.summary.button}
              to={content.summary.button.file.relativePath}
            />
          </Column>
          <Column width="60%">
            <Text
              dangerouslySetInnerHTML={{
                __html: content.summary.text
              }}
            />
          </Column>
        </Container>
      </Grid>
      <Grid py="80px">
        <H3>{content.work.heading}</H3>
        {content.work.jobs.map((job, index) => (
          <Container key={index}>
            <Column width="40%">
              <H4>{job.company}</H4>
              <Date>{job.date}</Date>
            </Column>
            <Column width="60%">
              <H4>{job.role}</H4>
              <Text dangerouslySetInnerHTML={{ __html: job.text }} />
            </Column>
          </Container>
        ))}
      </Grid>
    </>
  );
};

export default Header;
