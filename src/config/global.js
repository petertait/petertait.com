import { createGlobalStyle } from "styled-components";
import { normalize, darken, transparentize } from "polished";
import { color } from "styled-system";

import theme from "./theme";

import {
  NeutrifStudioRegularWOFF2,
  NeutrifStudioRegularWOFF,
  NeutrifStudioBoldWOFF2,
  NeutrifStudioBoldWOFF
} from "./fonts/fonts";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: "neutrif-studio";
    font-style: normal;
    font-weight: 400;
    src:
      url(${NeutrifStudioRegularWOFF2}) format('woff2'),
  	  url(${NeutrifStudioRegularWOFF}) format('woff');
  }

  @font-face {
    font-family: "neutrif-studio";
    font-style: normal;
    font-weight: 600;
    src:
      url(${NeutrifStudioBoldWOFF2}) format('woff2'),
  	  url(${NeutrifStudioBoldWOFF}) format('woff');
  }

  * {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    font-family: "neutrif-studio", sans-serif !important;

    &::-moz-selection {
      background: ${transparentize(0.8, darken(0.15, theme.color.ink))}; 
    }

    &::selection {
      background: ${transparentize(0.8, darken(0.15, theme.color.ink))}; 
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
    color: ${theme.color.paper};
    background-color: ${theme.color.ink};
    font-size: ${theme.font.size.delta};

    ${color};

    #___gatsby > div[role="group"] {
      display: flex;
    }
	}

  a {
    text-decoration: none;
    transition: ${theme.transition};

    p & {
      color: ${theme.color.ink};

      &:hover {
        color: ${darken(0.1, theme.color.ink)};
      }
    }
  }

  hr {
    margin: 40px auto;
    border: none;
    border-top: 1px solid ${theme.color.paper};
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
