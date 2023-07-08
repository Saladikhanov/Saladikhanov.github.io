import React from "react";
import { VscMenu } from "react-icons/vsc";
import { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import LogoIcon from "../../assets/logo-icon.png";
import LogoName from "../../assets/logo-name.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavDivName,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  // console.log(typeof NavLogo);
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  useEffect(() => {
    console.log(scrollNav);
  });
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {/* <NavIcon src={LogoIcon} />
            <NavName src={LogoName} /> */}
            <NavDivName>Arsen Saladikhanov</NavDivName>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <VscMenu />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="brief"
                smooth="true"
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Brief
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
                User research
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
                Design
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
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
