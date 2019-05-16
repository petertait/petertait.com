import React, { useRef } from "react";

import { useOnClickOutside } from "config/utils";
import { H3, H4 } from "components/Text";
import { Grid, Container, Column } from "components/Grid";

import Header from "./Header";

import { Wrapper, Inner, Section, Subtitle, Text } from "./styles";

const CV = ({ content, colors, onClose, isVisible }) => {
  const ref = isVisible ? useRef() : null;
  useOnClickOutside(ref, () => onClose());

  return (
    <Wrapper colors={colors} isVisible={isVisible}>
      <Inner colors={colors} ref={ref}>
        <Header content={content} colors={colors} onClose={onClose} />
        <Section colors={colors}>
          <H3>{content.work.heading}</H3>
          {content.work.jobs.map((job, index) => (
            <Container key={index} pt={["30px", "50px"]} pb="10px">
              <Column width={["100%", "40%"]}>
                <H4>{job.company}</H4>
                <Subtitle>{job.date}</Subtitle>
              </Column>
              <Column width={["100%", "60%"]}>
                <H4>{job.role}</H4>
                <Text content={job.text} />
              </Column>
            </Container>
          ))}
        </Section>
        <Section colors={colors}>
          <H3>{content.education.heading}</H3>
          <Container pt={["10px", "60px"]}>
            {content.education.qualifications.map((qualification, index) => (
              <Column
                key={index}
                pt={["30px", "0"]}
                pr={["0", "40px"]}
                width={[1 / 1, 1 / 3]}
              >
                <H4>{qualification.school}</H4>
                <Subtitle mb="0">{qualification.date}</Subtitle>
                <Subtitle mb="0">{qualification.type}</Subtitle>
                <Text mt="10px" content={qualification.text} />
              </Column>
            ))}
          </Container>
        </Section>
        <Section colors={colors}>
          <H3>{content.personal.heading}</H3>
          <Container pt={["10px", "60px"]}>
            <Column pr={["0", "40px"]} width={[1 / 1, 1 / 2]}>
              <H4>{content.personal.skills.heading}</H4>
              <Text mt="10px" content={content.personal.skills.text} />
            </Column>
            <Column
              pt={["30px", "0"]}
              pr={["0", "40px"]}
              width={[1 / 1, 1 / 2]}
            >
              <H4>{content.personal.passions.heading}</H4>
              <Text mt="10px" content={content.personal.passions.text} />
            </Column>
          </Container>
        </Section>
      </Inner>
    </Wrapper>
  );
};

export default CV;
