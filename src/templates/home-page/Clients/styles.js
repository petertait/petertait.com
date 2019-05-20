import styled from "styled-components";
import styledMap from "styled-map";

import theme from "config/theme";
import { H5 } from "components/Text";
import { CarouselButton } from "components/Carousel";

export const Wrapper = styled.div`
  overflow: visible;
  height: 100vh;
  padding: 100px 0;
  transition: 0.4s cubic-bezier(0.785, 0.135, 0.15, 0.86);
`;

export const Logo = styled.img`
  width: 100%;
  height: 166px;
  display: block;
  padding: 0 30px;

  ${"" /* height: 16%;

  @media (max-height: 1200px) {
    height: 20%;
  }

  @media (max-height: 900px) {
    height: 25%;
  }

  @media (max-height: 700px) {
    height: 33%;
  } */}
`;

export const Nav = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavButton = styled(CarouselButton)``;
