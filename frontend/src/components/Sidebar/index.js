import React from "react";
import {
  SidebarContainer,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/*<Icon onClick={toggle}></Icon>*/}
      <SidebarWrapper>
        <SidebarMenu>
          {/*<SidebarLink*/}
          {/*  to="project"*/}
          {/*  smooth="true"*/}
          {/*  duration={500}*/}
          {/*  spy={true}*/}
          {/*  exact="true"*/}
          {/*  offset={-80}*/}
          {/*  onClick={toggle}*/}
          {/*>*/}
          {/*  Projects*/}
          {/*</SidebarLink>*/}
          <SidebarLink
            to="expertise"
            smooth="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Expertise
          </SidebarLink>
          <SidebarLink
            to="about"
            smooth="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            About
          </SidebarLink>
          <SidebarLink
            to="contact"
            smooth="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onClick={toggle}
          >
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
