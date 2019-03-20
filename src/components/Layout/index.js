import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import GlobalStyle from "config/global";

import Menu from "components/Menu";

import touchIcon from "./apple-touch-icon.png";
import favicon16 from "./favicon-16.png";
import favicon32 from "./favicon-32.png";

import Scroller from "./Scroller";

const Layout = ({ colors, content, children }) => {
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
              {content.title ? `${content.title} | ` : ""}
              {data.site.siteMetadata.title}
            </title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
            <link rel="apple-touch-icon" sizes="180x180" href={touchIcon} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          </Helmet>
          <GlobalStyle />
          <Menu colors={content.colors} />
          <Scroller colors={content.colors}>{children}</Scroller>
        </>
      )}
    />
  );
};

export default Layout;
