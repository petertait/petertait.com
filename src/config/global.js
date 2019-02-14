import { createGlobalStyle } from "styled-components";
import { normalize, darken, transparentize } from "polished";
import { color } from "styled-system";

import theme from "./theme";

import {
  NeutrifStudioRegularWOFF,
  NeutrifStudioBoldWOFF,
  SpaceMonoRegularWOFF,
  SpaceMonoBoldWOFF
} from "./fonts/fonts";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: "neutrif-studio";
    font-style: normal;
    font-weight: 400;
    src:
  	  url(${NeutrifStudioRegularWOFF}) format('woff');
  }

  @font-face {
    font-family: "neutrif-studio";
    font-style: normal;
    font-weight: 600;
    src:
  	  url(${NeutrifStudioBoldWOFF}) format('woff');
  }

  @font-face {
    font-family: "space-mono";
    font-style: normal;
    font-weight: 400;
    src:
  	  url(${SpaceMonoRegularWOFF}) format('woff');
  }

  @font-face {
    font-family: "space-mono";
    font-style: normal;
    font-weight: 600;
    src:
  	  url(${SpaceMonoBoldWOFF}) format('woff');
  }

  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: ${theme.font.sans};

    &::-moz-selection {
      background: ${transparentize(0.6, "#666")};
    }

    &::selection {
      background: ${transparentize(0.6, "#666")};
    }
  }

  html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  html,
  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
  }

	body {
    line-height: 1.6;
    -webkit-text-size-adjust: none;
    color: white;
    background-color: ${theme.color.blue};
    font-size: ${theme.font.size.delta};
    font-weight: ${theme.font.weight.regular};

    ${color};

    #___gatsby > div[role="group"] {
      display: flex;
    }
	}

  a {
    text-decoration: none;
    transition: ${theme.transition};

    p & {
      color: ${theme.color.blue};

      &:hover {
        color: ${darken(0.1, theme.color.blue)};
      }
    }
  }

  hr {
    margin: 40px auto;
    border: none;
    border-top: 1px solid white;
  }

  strong {
    color: inherit;
    font-weight: ${theme.font.weight.bold};
  }

  p, li {
    margin-top: 0;
    margin-bottom: 15px;
  }
`;

export default GlobalStyle;
