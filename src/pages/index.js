import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { lighten } from "polished";

import Block, { HeroBlock } from "components/Block";

import Layout from "components/Layout";

export const HomePageTemplate = ({ page }) => {
  return (
    <>
      <HeroBlock
        width="90vw"
        color="white"
        bg={lighten(0.03, "black")}
        content={page.hero}
      />
      <Block width="1000px" color="white" bg="black" title="Services" />
    </>
  );
};

// HomePageTemplate.propTypes = {
//   title: PropTypes.string
// };

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.allMarkdownRemark.edges[0].node;

  return (
    <Layout content={page}>
      <HomePageTemplate page={page} />
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
            hero {
              heading
              subheading
              button {
                text
                path
              }
              background {
                relativePath
              }
            }
            services {
              heading
              text
              service {
                heading
                text
                image {
                  relativePath
                }
              }
            }
          }
        }
      }
    }
  }
`;
