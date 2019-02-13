import React from "react";
import { Link } from "gatsby";

import logoIndigo from "img/pelatum-logo-indigo.svg";
import logoWhite from "img/pelatum-logo-white.svg";

import {
  Wrapper,
  Logo,
  Nav,
  NavButton,
  MenuHeader,
  MenuButton
} from "./styles";

class Header extends React.Component {
  state = {
    isVisible: false
  };

  toggleVisiblity = () => {
    this.setState(state => ({ isVisible: !state.isVisible }));
  };

  render() {
    const { isVisible } = this.state;
    const { shade } = this.props;
    const logo = shade === "dark" ? logoWhite : logoIndigo;

    return (
      <Wrapper
        role="navigation"
        aria-label="main-navigation"
        as="header"
        shade={shade}
      >
        <Link to="/" title="Logo">
          <Logo src={logo} alt="Pelatum" />
        </Link>
        <MenuButton
          shade={shade}
          onClick={this.toggleVisiblity}
          isVisible={isVisible}
        >
          <span />
        </MenuButton>
        <Nav isVisible={isVisible}>
          <MenuHeader>
            <Link to="/" title="Logo">
              <Logo src={logoWhite} alt="Clearmatics" />
            </Link>
          </MenuHeader>
          <NavButton to="/solutions" activeClassName="active">
            Solutions
          </NavButton>
          <NavButton to="/about" activeClassName="active">
            About
          </NavButton>
          <NavButton to="/insights" activeClassName="active">
            Insights
          </NavButton>
          <NavButton to="/partners" activeClassName="active">
            Partners
          </NavButton>
          <NavButton to="/contact" activeClassName="active">
            Contact
          </NavButton>
        </Nav>
      </Wrapper>
    );
  }
}

export default Header;
