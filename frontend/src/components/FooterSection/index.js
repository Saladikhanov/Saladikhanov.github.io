import React from "react";
import { BsArrowUp as ArrowUp } from "react-icons/bs";
// import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import LogoIcon from "../../assets/logo-icon.png";
import LogoName from "../../assets/logo-name.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavDivName,
  NavMenu,
  NavItem,
  NavLinks,
  ArrowWrap,
  Copyright,
  Top,
  Bottom,
} from "./FooterElements";

const Footer = ({ toggle }) => {
  // console.log(typeof NavLogo);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav>
        <NavLogo to="/" onClick={toggleHome}>
          {/* <NavIcon src={LogoIcon} />
          <NavName src={LogoName} /> */}
          {/*<NavDivName>AS</NavDivName>*/}
        </NavLogo>
        <NavbarContainer>
          <NavMenu>
            <NavItem>
              {/* <NavLinks
                to="project"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Projects
              </NavLinks> */}
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
          {/*<Copyright>*/}
          {/*  <Top>All rights reserved to Arsen Saladikhanov</Top>*/}
          {/*  <Bottom>© COPYRIGHT 2023</Bottom>*/}
          {/*</Copyright>*/}
        </NavbarContainer>
        <ArrowWrap to="/" onClick={toggleHome}>
          <ArrowUp />
        </ArrowWrap>
      </Nav>
    </>
  );
};

export default Footer;
