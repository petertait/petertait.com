import styled from "styled-components";
import styledMap from "styled-map";
import { space } from "styled-system";

import theme from "config/theme";
import { Wrapper as AniLinkWrapper } from "components/Button/styles";

const ButtonWrapper = AniLinkWrapper.withComponent("button");
export const CarouselButton = styled(ButtonWrapper)`
  margin: 3px;

  font-size: ${styledMap("size", {
    small: theme.font.size.epsilon,
    default: theme.font.size.upsilon
  })};

  padding: ${styledMap("size", {
    small: "9px 11px 7px",
    default: "11px 14px 9px"
  })};

  ${space};

  @media (max-width: ${theme.size.tablet}) {
    padding: 9px 10px 5px;
    font-size: ${theme.font.size.upsilon};
  }
`;
