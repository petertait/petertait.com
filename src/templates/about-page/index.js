import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { navigate } from "@reach/router";
import { useLocation, useMedia } from "react-use";

import theme from "config/theme";
import { toggleScroll } from "config/utils";
import { Column } from "components/Grid";
import Layout from "components/Layout";
import Button from "components/Button";
import Block, {
  HeroBlock,
  Header,
  Heading,
  Subheading,
  Text
} from "components/Block";

import CV from "./CV";

export const AboutPageTemplate = ({ page }) => {
  const location = useLocation();
  const isDesktop = useMedia(`(min-width: ${theme.size.desktop})`);

  const toggleCV = () => {
    if (location.search === "?cv") {
      navigate(location.pathname);
      isDesktop && toggleScroll(true);
      isDesktop && document.body.classList.add("no-scroll");
    } else {
      toggleScroll(false);
      navigate(`?${page.bio.textButton.navigate}`);
      document.body.classList.remove("no-scroll");
    }
  };

  return (
    <>
      <HeroBlock colors={page.colors} content={page.hero} />
      <Block content={page.bio} colors={page.colors}>
        <Header>
          {(page.bio.heading || page.bio.subheading) && (
            <Column flex="1" width="auto" justifyContent="center">
              {page.bio.heading && <Heading>{page.bio.heading}</Heading>}
              {page.bio.subheading && (
                <Subheading content={page.bio.subheading} />
              )}
            </Column>
          )}
        </Header>
        {page.bio.text && <Text content={page.bio.text} />}
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
