import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Block, { HeroBlock } from "components/Block";

import Layout from "components/Layout";

export const HomePageTemplate = ({ page }) => {
  return (
    <>
      <HeroBlock
        shade="dark"
        width="90vw"
        color={page.color}
        content={page.hero}
      />
      <Block width="1000px" shade="dark" color={page.color} title="Services" />
    </>
  );
};

// HomePageTemplate.propTypes = {
//   title: PropTypes.string
// };

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.allMarkdownRemark.edges[0].node;

  return (
    <Layout content={page} color={page.color} shade={page.hero.shade}>
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
            color {
              light
              dark
            }
            hero {
              shade
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
