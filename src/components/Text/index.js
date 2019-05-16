import React from "react";
import remark from "remark";
import recommended from "remark-preset-lint-recommended";
import remarkHtml from "remark-html";
import styled from "styled-components";
import styledMap from "styled-map";
import {
  flex,
  color,
  space,
  width,
  opacity,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing
} from "styled-system";
import { transparentize } from "polished";

import theme from "config/theme";

export const Text = styled.div`
  width: 100%;

  ${flex};
  ${color};
  ${space};
  ${width};
  ${fontSize};
  ${textAlign};
  ${lineHeight};
  ${fontWeight};
  ${letterSpacing};
`;

export const Markdown = ({ content, ...props }) => {
  const text = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(content)
    .toString();

  return (
    <Text {...props}>
      <div dangerouslySetInnerHTML={{ __html: text }} />
    </Text>
  );
};

const H1Text = Text.withComponent("h1");
export const H1 = styled(H1Text)`
  width: 100%;
  line-height: 1;
  margin: 0;
  letter-spacing: -4px;
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.size.tera};
  font-size: 100px;
  font-size: calc(98px + 6 * ((100vw - 320px) / 680));

  color: ${styledMap("shade", {
    dark: props =>
      props.outline
        ? "transparent"
        : props.colors
        ? props.colors.light
        : "white",
    default: props =>
      props.outline ? "transparent" : props.colors ? props.colors.dark : "black"
  })};

  -webkit-text-stroke: ${styledMap("shade", {
    dark: props =>
      props.outline
        ? `1px ${transparentize(
            0.4,
            props.colors ? props.colors.light : "white"
          )}`
        : "none",
    default: props =>
      props.outline
        ? `1px ${transparentize(
            0.4,
            props.colors ? props.colors.dark : "black"
          )}`
        : "none"
  })};

  & + & {
    margin: 20px 0 0;
  }

  @media (max-height: ${theme.size.maxHeight}) {
    letter-spacing: -3px;
    font-size: calc(80px + 6 * ((100vw - 320px) / 680));
  }

  @media (max-width: ${theme.size.desktop}) {
    letter-spacing: -3px;

    font-size: calc(80px + 6 * ((100vw - 320px) / 680));
  }

  @media (max-width: ${theme.size.tablet}) {
    letter-spacing: -1px;
    -webkit-text-stroke-width: 0.8px;
    font-size: calc(60px + 6 * ((100vw - 320px) / 680));
  }

  @media (max-width: ${theme.size.mobile}) {
    letter-spacing: -0.5px;
    -webkit-text-stroke-width: 0.7px;
    font-size: calc(50px + 6 * ((100vw - 320px) / 680));
  }

  ${color};
  ${space};
  ${opacity};
  ${fontSize};
  ${fontWeight};

  p {
    margin: 0;
  }
`;

const H2Text = Text.withComponent("h2");
export const H2 = styled(H2Text)`
  width: 100%;
  line-height: 1;
  margin: 0 0 10px;
  font-size: ${theme.font.size.beta};
  font-weight: ${theme.font.weight.bold};

  @media (max-width: ${theme.size.mobile}) {
    font-size: ${theme.font.size.cesar};
  }

  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
`;

const H3Text = Text.withComponent("h3");
export const H3 = styled(H3Text)`
  width: 100%;
  line-height: 1.3;
  margin: 0 0 10px;
  font-size: ${theme.font.size.theta};
  font-weight: ${theme.font.weight.bold};

  @media (max-width: ${theme.size.mobile}) {
    font-size: ${theme.font.size.theta};
  }

  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
`;

const H4Text = Text.withComponent("h4");
export const H4 = styled(H4Text)`
  width: 100%;
  line-height: 1.3;
  margin: 0 0 10px;
  font-size: ${theme.font.size.delta};
  font-weight: ${theme.font.weight.bold};

  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
`;

const H5Text = Text.withComponent("h5");
export const H5 = styled(H5Text)`
  line-height: 1.1;
  margin: 0 0 10px;
  font-size: ${theme.font.size.epsilon};
  font-weight: ${theme.font.weight.regular};

  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
`;

const H6Text = Text.withComponent("h6");
export const H6 = styled(H6Text)`
  line-height: 1.1;
  margin: 0 0 10px;
  font-size: ${theme.font.size.zeta};
  font-weight: ${theme.font.weight.regular};

  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
`;

const StrongText = Text.withComponent("strong");
export const Strong = styled(StrongText)`
  color: inherit;
  font-weight: ${theme.font.weight.bold};

  ${color};
  ${fontWeight};
`;

const SmallText = Text.withComponent("small");
export const Small = styled(SmallText)`
  color: inherit;

  ${color};
`;
