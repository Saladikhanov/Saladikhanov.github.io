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
  NavIcon,
  NavName,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavDivName,
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
    // console.log(scrollNav);
  });
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            {/* <NavIcon src={LogoIcon} /> */}
            {/* <NavName src={LogoName} /> */}
            <NavDivName>Arsen Saladikhanov</NavDivName>
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <VscMenu />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              {/* <NavLinks
                scrollNav={scrollNav}
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
                scrollNav={scrollNav}
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
                scrollNav={scrollNav}
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
                scrollNav={scrollNav}
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
