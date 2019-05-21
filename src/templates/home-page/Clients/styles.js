import styled from "styled-components";
import { transparentize } from "polished";

import theme from "config/theme";
import { CarouselButton } from "components/Carousel";

export const Wrapper = styled.div`
  overflow: auto;
  scroll-behavior: smooth;
  padding: 30px 0 80px;
  position: relative;

  @media (min-width: ${theme.size.desktop}) {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }

  @media (max-width: ${theme.size.desktop}) {
    display: flex;
    align-items: center;
    padding: 20px 60px;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 170px;
  display: block;
  padding: 0 30px;

  @media (max-width: ${theme.size.desktop}) {
    width: auto;
    height: 130px;
    padding: 0 10px;
    align-self: center;

    &:last-child {
      padding-right: 80px;
    }
  }
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

  @media (max-width: ${theme.size.desktop}) {
    height: 100%;
    width: 100vw;
    background: none;
    padding: 0;

    ${CarouselButton} {
      top: 50%;
      position: absolute;
      transform: translateY(-50%);
    }

    ${CarouselButton}:first-child {
      left: 10px;
    }

    ${CarouselButton}:last-child {
      right: 10px;
    }
  }
`;
