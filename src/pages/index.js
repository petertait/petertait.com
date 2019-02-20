import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Block, { HeroBlock } from "components/Block";

import Layout from "components/Layout";

import Services from "templates/home-page/Services";

export const HomePageTemplate = ({ page }) => {
  return (
    <>
      <HeroBlock color={page.color} content={page.hero} />
      <Block width="1200px" shade="dark" color={page.color}>
        <Services content={page.services} shade="dark" color={page.color} />
      </Block>
      <Block width="1200px" shade="light" color={page.color}>
        <Services content={page.services} shade="dark" color={page.color} />
      </Block>
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
