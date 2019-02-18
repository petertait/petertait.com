import styled from "styled-components";
import { color, width, maxWidth } from "styled-system";
import { darken, transparentize } from "polished";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1400px;

  ${width};
  ${maxWidth}

  &::after {
    content: "";
    width: 250px;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background: ${props =>
      props.bg
        ? `linear-gradient(to right, ${transparentize(
            1,
            props.bg
          )} 0%, ${transparentize(0, props.bg)} 100%)`
        : "none"};
  }
`;

export const Inner = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px 150px 0 100px;
  flex-shrink: 0;
  white-space: normal;
  max-width: 1400px;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% auto;
  background-image: ${props =>
    props.image ? `url(media/${props.image})` : "none"};

  ${color};
  ${width};
  ${maxWidth}
`;

export const Pattern = styled.div`
  top: 0;
  left: 0;
  z-index: -1;
  object-fit: cover;
  position: absolute;

  svg path {
    fill: ${props => darken(0.03, props.color || "black")};
  }
`;
