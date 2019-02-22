import React, { Component } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import GlobalStyle from "config/global";

import Menu from "components/Menu";

import touchIcon from "./apple-touch-icon.png";
import favicon16 from "./favicon-16.png";
import favicon32 from "./favicon-32.png";

import { Wrapper } from "./styles";

class Layout extends Component {
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("wheel", this.replaceVerticalScrollByHorizontal);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener(
        "wheel",
        this.replaceVerticalScrollByHorizontal
      );
    }
  }

  replaceVerticalScrollByHorizontal = event => {
    if (event.deltaY !== 0) {
      window.scroll(window.scrollX + event.deltaY * 5, window.scrollY);
      event.preventDefault();
    }

    return;
  };

  render() {
    const { color, content, children } = this.props;

    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
                description
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet>
              <html lang="en" />
              <title>
                {content && content.page.title
                  ? `${content.page.title} | `
                  : ""}
                {data.site.siteMetadata.title}
              </title>
              <meta
                name="description"
                content={data.site.siteMetadata.description}
              />
              <link rel="apple-touch-icon" sizes="180x180" href={touchIcon} />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href={favicon32}
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href={favicon16}
              />
            </Helmet>
            <GlobalStyle />
            <Menu color={color} />
            <Wrapper color={color}>{children}</Wrapper>
          </>
        )}
      />
    );
  }
}

export default Layout;
