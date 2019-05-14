import React, { useRef } from "react";

import { useOnClickOutside } from "config/utils";
import { H2, H3, H4 } from "components/Text";
import { Grid, Container, Column } from "components/Grid";

import Header from "./Header";

import { Wrapper, Inner, Date, Text } from "./styles";

const CV = ({ content, colors, onClose, isVisible }) => {
  const ref = isVisible ? useRef() : null;
  useOnClickOutside(ref, () => onClose());

  return (
    <>
      <Wrapper colors={colors} isVisible={isVisible}>
        <Inner colors={colors} ref={ref}>
          <Header content={content} colors={colors} onClose={onClose} />
          <Grid>
            <H2>{content.work.heading}</H2>
            {content.work.jobs.map((job, index) => (
              <Container key={index} pt="50px">
                <Column width={["100%", "40%"]}>
                  <H4>{job.company}</H4>
                  <Date>{job.date}</Date>
                </Column>
                <Column width={["100%", "60%"]}>
                  <H4>{job.role}</H4>
                  <Text dangerouslySetInnerHTML={{ __html: job.text }} />
                </Column>
              </Container>
            ))}
          </Grid>
        </Inner>
      </Wrapper>
    </>
  );
};

export default CV;
