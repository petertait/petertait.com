import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import Block, { HeroBlock } from "components/Block";
import Services from "templates/home-page/Services";
import Works from "templates/home-page/Works";

export const HomePageTemplate = ({ page }) => (
  <>
    <HeroBlock colors={page.colors} content={page.hero} />
    <Block width="1200px" content={page.services} colors={page.colors}>
      <Services content={page.services} colors={page.colors} />
    </Block>
    <Block width="1300px" content={page.works} colors={page.colors}>
      <Works content={page.works} colors={page.colors} />
    </Block>
  </>
);

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;
  return (
    <Layout content={page} colors={page.colors}>
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
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        page {
          title
        }
        colors {
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
          shade
          heading
          subheading
          service {
            heading
            text
            image {
              relativePath
            }
          }
        }
        works {
          shade
          heading
          subheading
          button {
            text
            path
          }
          work {
            client
            heading
            image {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 70
                  duotone: { highlight: "#ffffff", shadow: "#002AB1" }
                ) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
