import React from "react";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
// import { ImArrowUp2 } from "react-icons/im";
// import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: #41327b; */
  background: none;
  /* filter: blur(6rem); */
  height: 80px;
  width: 100vw;
  /* margin-top: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  /* position: sticky; */

  @media screen and (max-width: 960px) {
    /* transition: 0.8s all ease; */
    display: flex;
    flex-direction: column;
  } ;
`;

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* height: 80px; */
  /* z-index: 1; */
  width: 80vw;
  padding: 0;
  /* max-width: 1100px; */
  /* border: 1px solid red; */
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;
export const NavIcon = styled.img`
  height: 30px;
  margin-right: 8px;
  /* border: 1px solid red; */
`;
export const NavName = styled.img`
  height: 15px;
  /* border: 1px solid red; */
`;
// export const MobileIcon = styled.div`
//   display: none;

//   @media screen and (max-width: 768px) {
//     display: block;
//     position: absolute;
//     top: 0;
//     right: 0;
//     transform: translate(-100%, 60%);
//     font-size: 35px;
//     cursor: pointer;
//     color: #beaaea;
//     /* border: 1px solid red; */
//   } ;
// `;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  padding-left: 0;
  /* text-align: center; */
  /* margin-right: -20px; */
  /* border: 1px solid red; */
  /* display: none; */

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const NavItem = styled.li`
  /* height: 80px; */
`;

export const NavLinks = styled(LinkS)`
  color: #beaaea;
  /* display: none; */
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  /* border: 1px solid red; */
`;
export const ArrowWrap = styled.div`
  margin: 5px;
  font-size: 25px;
  color: #e59aff;
  /* weight: 30px;
  height: 30px; */
  /* border: 1px solid red; */
`;
export const Copyright = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const Top = styled.div`
  /* border: 1px solid red; */
  color: #beaaea;
  opacity: 30%;
`;
export const Bottom = styled.div`
  /* border: 1px solid red; */
  color: #beaaea;
  opacity: 30%;
`;
