import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Block, { HeroBlock } from "components/Block";
import Layout from "components/Layout";
import Services from "templates/home-page/Services";
import Works from "templates/home-page/Works";

export const HomePageTemplate = ({ page }) => (
  <>
    <HeroBlock color={page.color} content={page.hero} />
    <Block width="1200px" content={page.services} color={page.color}>
      <Services content={page.services} color={page.color} />
    </Block>
    <Block width="1300px" content={page.works} color={page.color}>
      <Works content={page.works} color={page.color} />
    </Block>
  </>
);

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;
  return (
    <Layout content={page} color={page.color}>
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
          shade
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
        works {
          shade
          heading
          text
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
                  duotone: { highlight: "#ffffff", shadow: "#0032D2" }
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
