import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { color } from "styled-system";

import theme from "./theme";

import {
  ApercuRegularWOFF,
  ApercuBoldWOFF,
  ApercuRegularWOFF2,
  ApercuBoldWOFF2,
  SpaceMonoRegularWOFF,
  SpaceMonoBoldWOFF
} from "./fonts/fonts";

const GlobalStyle = createGlobalStyle`
  ${normalize()}

  @font-face {
    font-family: "apercu";
    font-style: normal;
    font-weight: 400;
    src:
  	  url(${ApercuRegularWOFF}) format('woff'),
      url(${ApercuRegularWOFF2}) format('woff2');
  }

  @font-face {
    font-family: "apercu";
    font-style: normal;
    font-weight: 600;
    src:
  	  url(${ApercuBoldWOFF}) format('woff'),
      url(${ApercuBoldWOFF2}) format('woff2');
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
    // will-change: transform;
  }

	body {
    line-height: 1.6;
    -webkit-text-size-adjust: none;
    font-size: ${theme.font.size.epsilon};
    font-weight: ${theme.font.weight.regular};

    ${color};

    #___gatsby > div[role="group"] {
      display: flex;
    }

    .tl-edges {
      overflow-x: unset!important;
      max-width: none;
    }
	}

  a {
    text-decoration: none;
    transition: ${theme.transition};
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
