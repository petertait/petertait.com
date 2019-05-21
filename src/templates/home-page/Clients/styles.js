import styled from "styled-components";
import { transparentize } from "polished";

import { CarouselButton } from "components/Carousel";

export const Wrapper = styled.div`
  overflow: auto;
  scroll-behavior: smooth;
  padding: 30px 0 80px;

  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 170px;
  display: block;
  padding: 0 30px;
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
  padding: 100px 15px 15px;
  background: ${props => `linear-gradient(
    to bottom,
    ${transparentize(1, props.colors ? props.colors.light : "white")} 0%,
    ${props.colors ? props.colors.light : "white"} 85%
  )`};
`;

export const NavButton = styled(CarouselButton)``;
