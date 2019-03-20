import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { navigate } from "@reach/router";
import { useLocation, useMedia } from "react-use";

import theme from "config/theme";
import { toggleScroll } from "config/utils";

import Layout from "components/Layout";
import Button from "components/Button";
import Block, { HeroBlock } from "components/Block";

import CV from "./CV";

export const AboutPageTemplate = ({ page }) => {
  const location = useLocation();
  const isDesktop = useMedia(`(min-width: ${theme.size.desktop})`);

  const toggleCV = () => {
    if (location.search === "?cv") {
      navigate(location.pathname);
      toggleScroll(true, isDesktop);
    } else {
      navigate(`?${page.bio.textButton.navigate}`);
      toggleScroll(false, isDesktop);
    }
  };

  return (
    <>
      <HeroBlock colors={page.colors} content={page.hero} />
      <Block width="1200px" content={page.bio} colors={page.colors}>
        {page.bio.textButton && (
          <Button
            cover
            mt="30px"
            onClick={toggleCV}
            colors={page.colors}
            shade={page.bio.shade}
            content={page.bio.textButton}
          />
        )}
      </Block>
      <CV
        content={page.cv}
        onClose={toggleCV}
        colors={page.colors}
        isVisible={location.search === "?cv"}
      />
    </>
  );
};

const AboutPage = ({ data }) => {
  const { frontmatter: page } = data.markdownRemark;
  return (
    <Layout content={page}>
      <AboutPageTemplate page={page} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
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
        bio {
          shade
          heading
          subheading
          text
          textButton {
            text
            navigate
          }
        }
        cv {
          heading
          subheading
          summary {
            heading
            text
            button {
              text
              file {
                relativePath
              }
            }
          }
          work {
            heading
            jobs {
              company
              date
              role
              text
            }
          }
          education {
            heading
            qualifications {
              school
              type
              date
              text
            }
          }
          personal {
            heading
            skills {
              heading
              text
            }
            passions {
              heading
              text
            }
          }
        }
      }
    }
  }
`;
