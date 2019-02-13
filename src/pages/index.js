import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import theme from "config/theme";

import Layout from "components/Layout";
import Block from "components/Block";
import { H1 } from "components/Text";

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.allMarkdownRemark.edges[0].node;

  return (
    <Layout content={page}>
      <Block width="98vw">
        <H1>{page.block1.heading}</H1>
      </Block>
      <Block width="1000px" bg={theme.color.ink} color={theme.color.paper}>
        <H1>{page.block1.heading}</H1>
      </Block>
    </Layout>
  );
};

HomePage.propTypes = {
  data: PropTypes.object.isRequired
};

export default HomePage;

export const homePageQuery = graphql`
  query HomePage {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "home-page" } } }
    ) {
      edges {
        node {
          frontmatter {
            page {
              title
            }
            block1 {
              heading
            }
          }
        }
      }
    }
  }
`;
