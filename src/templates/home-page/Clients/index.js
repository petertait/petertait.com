import React, { useRef, useState } from "react";

import { Wrapper, Logo, Nav, NavButton } from "./styles";

const Clients = ({ content, colors }) => {
  const [index, setIndex] = useState(0);
  const wrapper = useRef(null);

  const handleScroll = direction => {
    if (!wrapper) return null;

    const wrapperHeight = wrapper.current.clientHeight;
    const logoHeight = wrapper.current.firstChild.clientHeight;
    const distance = index * logoHeight;

    if (direction === "up" && index !== 0) {
      setIndex(prevIndex => prevIndex - 1);
      wrapper.current.style.transform = `translateY(-${distance -
        logoHeight}px)`;
    }

    console.log(wrapperHeight);
    console.log(logoHeight);
    console.log(distance);

    if (direction === "down" && index !== 5) {
      setIndex(prevIndex => prevIndex + 1);
      wrapper.current.style.transform = `translateY(-${distance +
        logoHeight}px)`;
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
      <Nav>
        <NavButton onClick={() => handleScroll("up")}>Up</NavButton>
        <NavButton onClick={() => handleScroll("down")}>Down</NavButton>
      </Nav>
    </>
  );
};

export default Clients;
