import React from "react";

import { Wrapper, Heading, Logo } from "./styles";

const Clients = ({ content, colors }) => {
  return (
    <Wrapper>
      {content.heading && <Heading>{content.heading}</Heading>}
      {content.client.map((client, index) => (
        <Logo
          key={index}
          colors={colors}
          shade={content.shade}
          src={`/media/${client.logo.relativePath}`}
          alt={client.name}
        />
      ))}
    </Wrapper>
  );
};

export default Clients;
