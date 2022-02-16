import React from "react";

import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import LogoIcon from "../../assets/logo-icon.png";
import LogoName from "../../assets/logo-name.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  NavName,
  NavMenu,
  NavItem,
  NavLinks,
} from "./FooterElements";

const Footer = ({ toggle }) => {
  // console.log(typeof NavLogo);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <NavIcon src={LogoIcon} />
            <NavName src={LogoName} />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="project"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="expertise"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Expertise
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
          <div>
            <div>All rights reserved to Daria Zefira</div>
            <div>© COPYRIGHT 2022</div>
          </div>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Footer;
