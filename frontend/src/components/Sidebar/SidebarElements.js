import styled from "styled-components";
import { VscChromeClose } from "react-icons/vsc";

import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
  /* border: 1px solid red; */
  position: fixed;
  z-index: 990;
  width: 100vw;
  height: 300px;
  /* background: rgba(0, 0, 0, 0.534) 100%; */
  background: rgb(18, 18, 18);
  background: -moz-linear-gradient(90deg,
  rgba(0, 0, 0, 0) 9%,
  rgb(18, 18, 18) 100%);
  background: -webkit-linear-gradient(90deg,
  rgba(0, 0, 0, 0) 9%,
  rgb(18, 18, 18) 100%);
  background: linear-gradient(90deg,
  rgba(0, 0, 0, 0) 9%,
  rgb(18, 18, 18) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);
  backdrop-filter: blur(3px);
  display: grid;
  align-items: center;
  /* top: 0; */
  left: 0;

  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
  top: 50px;
  /* opacity: 100%; */
    /* top: ${({isOpen}) => (isOpen ? "80px" : "-100%")}; */
  left: ${({isOpen}) => (isOpen ? "0px" : "100%")};
`;

export const CloseIcon = styled(VscChromeClose)`
  color: #FFF;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #121212;
`;

export const SidebarMenu = styled.ul`
  /* border: 1px solid red; */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  /* border: 1px solid red; */
  padding-right: 2rem;
  display: flex;
  /* display: -webkit-flex; */
  align-items: center;
  /* -webkit-align-items: start; */
  justify-content: flex-end;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #FFF;
  cursor: pointer;

  &:hover {
    color: #fd994e;
    transition: 0.2s ease-in-out;
  }
`;

// export const SidebarRoute = styled(linkR)``;
