import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkButton = styled(Link)`
  padding: 10px;

  border: none;
  outline: none;
  color: ${({ dark }) => (dark ? "#FD994E" : "#e59aff")};
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background: ${({ primary }) => (primary ? "#fff" : "none")};
  white-space: nowrap;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  cursor: pointer;
  /* transition: all 0.1s ease-in-out; */

  &:hover {
    /* transition: all 0.1s ease-in-out; */
    color: ${({ dark }) => (dark ? "#e59aff" : "#FD994E")};
    /* background: ${({ primary }) =>
      primary ? "none" : "rgba(230, 230, 230, 0.3)"}; */
    /* font-size: ${({ fontBig }) => (fontBig ? "16px" : "17px")}; */
    /* box-shadow: 1px 1px 20px 12px rgba(230, 230, 230, 0.3);
    outline: none; */
  }
`;
