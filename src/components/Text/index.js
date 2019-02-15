import styled from "styled-components";
import {
  style,
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

import theme from "config/theme";

export const Text = styled.div`
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

const textStroke = style({
  prop: "textStroke",
  cssProperty: "-webkitTextStroke"
});

const H1Text = Text.withComponent("h1");
export const H1 = styled(H1Text)`
  width: 100%;
  line-height: 1;
  margin: 0 0 20px;
  letter-spacing: -2px;
  font-size: ${theme.font.size.tera};
  font-weight: ${theme.font.weight.bold};

  @media (max-width: ${theme.size.tablet}) {
    font-size: ${theme.font.size.mega};
  }

  @media (max-width: ${theme.size.mobile}) {
    font-size: ${theme.font.size.alpha};
  }

  ${color};
  ${space};
  ${opacity};
  ${fontSize};
  ${fontWeight};
  ${textStroke};
`;

const H2Text = Text.withComponent("h2");
export const H2 = styled(H2Text)`
  width: 100%;
  line-height: 1.3;
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
  line-height: 1.4;
  margin: 0 0 10px;
  font-size: ${theme.font.size.gamma};
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
  line-height: 1.1;
  margin: 0 0 10px;
  font-size: ${theme.font.size.upsilon};
  font-weight: ${theme.font.weight.bold};

  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
`;

const H5Text = Text.withComponent("h5");
export const H5 = styled(H5Text)`
  line-height: 1.4;
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
  line-height: 1.4;
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
