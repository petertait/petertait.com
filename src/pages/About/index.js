import React, { Component, PropTypes } from "react";

import { color } from "../../vars";

import Hero from "../../components/Hero";
import Container from "../../components/Container";
import Column from "../../components/Column";
import AnchorLink from "../../components/AnchorLink";

import AboutContent from "./content.md";

class Work extends Component {
  componentWillMount() {
    this.state = {
      theme: {
        primary: color.blue,
        secondary: color.white,
      },
    };
    document.body.style.backgroundColor = this.state.theme.primary;
    document.body.style.color = this.state.theme.secondary;
  }

  render() {
    return (
      <div>
        <Hero headline="Traditionally trained designer who builds inspiring products." />
        <Container>
          <Column width="half">
            <AnchorLink link="contact" text="Get in contact" margin="bottom" />
          </Column>
          <Column width="half">
            <div dangerouslySetInnerHTML={{ __html: AboutContent }} />
          </Column>
        </Container>
      </div>
    );
  }
}

export default Work;
