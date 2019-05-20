import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import Block, { HeroBlock } from "components/Block";
import Services from "templates/home-page/Services";
import Works from "templates/home-page/Works";
import Clients from "templates/home-page/Clients";

export const HomePageTemplate = ({ page }) => (
  <>
    <Block
      p="0"
      width="280px"
      justifyContent="flex-start"
      colors={page.colors}
      content={page.clients}
    >
      <Clients content={page.clients} colors={page.colors} />
    </Block>
    <HeroBlock content={page.hero} colors={page.colors} />
    <Block content={page.services} colors={page.colors}>
      <Services content={page.services} colors={page.colors} />
    </Block>

    <Block content={page.works} colors={page.colors}>
      <Works content={page.works} colors={page.colors} />
    </Block>
  </>
);

const HomePage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;
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
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
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
        clients {
          shade
          heading
          subheading
          client {
            name
            logo {
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
