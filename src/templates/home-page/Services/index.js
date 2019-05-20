import React from "react";

import { Column } from "components/Grid";
import { Header, Heading, Subheading } from "components/Block";

import Service from "./Service";
import { Inner } from "./styles";

const Services = ({ content, colors }) => {
  return (
    <>
      <Header>
        {(content.heading || content.subheading) && (
          <Column flex="1" width="auto" justifyContent="center">
            {content.heading && <Heading>{content.heading}</Heading>}
            {content.subheading && <Subheading content={content.subheading} />}
          </Column>
        )}
      </Header>
      <Inner>
        {content.service.map((service, index) => (
          <Service
            key={index}
            colors={colors}
            content={service}
            shade={content.shade}
          />
        ))}
      </Inner>
    </>
  );
};

export default Services;
