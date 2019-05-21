import React, { useRef } from "react";
import { useMedia } from "react-use";

import theme from "config/theme";
import { CarouselButton } from "components/Carousel";

import { Wrapper, Logo, Nav } from "./styles";

const Clients = ({ content, colors }) => {
  const wrapper = useRef(null);
  const isDesktop = useMedia(`(min-width: ${theme.size.desktop})`);

  const handleScroll = direction => {
    if (!wrapper) return null;
    const distance = wrapper.current.firstChild.clientHeight * 3;

    if (direction === "up") {
      wrapper.current.scrollTop -= distance;
    }

    if (direction === "down") {
      wrapper.current.scrollTop += distance;
    }

    if (direction === "left") {
      wrapper.current.scrollLeft -= distance;
    }

    if (direction === "right") {
      wrapper.current.scrollLeft += distance;
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
        {isDesktop ? (
          <>
            <CarouselButton
              onClick={() => handleScroll("up")}
              size="small"
              colors={colors}
            >
              ↑
            </CarouselButton>
            <CarouselButton
              onClick={() => handleScroll("down")}
              size="small"
              colors={colors}
            >
              ↓
            </CarouselButton>
          </>
        ) : (
          <>
            <CarouselButton
              onClick={() => handleScroll("left")}
              size="small"
              colors={colors}
            >
              ←
            </CarouselButton>
            <CarouselButton
              onClick={() => handleScroll("right")}
              size="small"
              colors={colors}
            >
              →
            </CarouselButton>
          </>
        )}
      </Nav>
    </>
  );
};

export default Clients;
