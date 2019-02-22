import React from "react";
import { StyleSheetManager } from "styled-components";
import PropTypes from "prop-types";

import HomePage from "pages/index";

import CSSInjector from "../CSSInjector";

const HomePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  return (
    <CSSInjector>
      <HomePage
        page={{ title: entry.getIn(["data", "page", "title"]) }}
        color={{
          light: entry.getIn(["data", "color", "light"]),
          dark: entry.getIn(["data", "color", "dark"])
        }}
        hero={{
          shade: entry.getIn(["data", "hero", "shade"]),
          heading: entry.getIn(["data", "hero", "heading"]),
          subheading: entry.getIn(["data", "hero", "subheading"]),
          button: {
            text: entry.getIn(["data", "hero", "button", "text"]),
            path: entry.getIn(["data", "hero", "button", "path"])
          },
          background: {
            relativePath: entry.getIn([
              "data",
              "hero",
              "background",
              "relativePath"
            ])
          },
          services: {
            shade: entry.getIn(["data", "services", "shade"]),
            heading: entry.getIn(["data", "services", "heading"]),
            text: entry.getIn(["data", "services", "text"]),
            service: {
              heading: entry.getIn(["data", "services", "service", "heading"]),
              text: entry.getIn(["data", "services", "service", "text"]),
              image: {
                relativePath: entry.getIn([
                  "data",
                  "services",
                  "service",
                  "image",
                  "relativePath"
                ])
              }
            }
          },
          works: {
            shade: entry.getIn(["data", "works", "shade"]),
            heading: entry.getIn(["data", "works", "heading"]),
            text: entry.getIn(["data", "works", "text"]),
            work: {
              color: entry.getIn(["data", "works", "work", "color"]),
              client: entry.getIn(["data", "works", "work", "client"]),
              heading: entry.getIn(["data", "works", "work", "heading"])
            }
          }
        }}
      />
    </CSSInjector>
  );
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default HomePagePreview;
