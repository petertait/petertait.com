import React, { useRef } from "react";

import { Wrapper, Logo, Nav, NavButton } from "./styles";

const Clients = ({ content, colors }) => {
  const wrapper = useRef(null);

  const handleScroll = direction => {
    if (!wrapper) return null;
    const distance = wrapper.current.firstChild.clientHeight * 3;

    if (direction === "up") {
      wrapper.current.scrollTop -= distance;
    }

    if (direction === "down") {
      wrapper.current.scrollTop += distance;
    }
  };

  return (
    <>
      <Wrapper ref={wrapper}>
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
      <Nav colors={colors}>
        <NavButton
          onClick={() => handleScroll("up")}
          size="small"
          colors={colors}
        >
          ↑
        </NavButton>
        <NavButton
          onClick={() => handleScroll("down")}
          size="small"
          colors={colors}
        >
          ↓
        </NavButton>
      </Nav>
    </>
  );
};

export default Clients;
