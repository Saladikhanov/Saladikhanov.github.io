import styled from "styled-components";
import { BsArrowRightCircle, BsArrowRight } from "react-icons/bs";

export const ArrowRightCircle = styled(BsArrowRightCircle)`
  margin: 10px;
  font-size: 30px;
`;

export const ArrowRight = styled(BsArrowRight)`
  margin: 10px;
  font-size: 30px;
`;

export const ProjectBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    align-items: start;
    padding-left: 4%;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* padding: 0 2px; */
  /* margin: 0 16px 16px 16px; */

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
export const ProjectWrapper = styled.div`
  overflow: hidden;
  padding: 70px;
  width: 50%;
  word-wrap: break-word;
  box-sizing: border-box;
  /* border: 1px solid #ccc; */

  @media screen and (max-width: 768px) {
    word-wrap: normal;
    width: 100%;
    padding: 0;
  }
`;
export const ProjectPic = styled.img`
  /* text-align: center; */
  /* border: 1px solid red; */
  width: 100%;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.11);

  @media screen and (max-width: 768px) {
    word-wrap: normal;
  }
`;
export const ProjectName = styled.h2`
  margin: 25px 0;
  text-align: start;

  @media screen and (max-width: 768px) {
    padding-left: 5%;
  }
`;
export const ProjectDescription = styled.p`
  text-align: start;
  margin-left: 0;

  @media screen and (max-width: 768px) {
    padding-left: 5%;
  }
`;
export const ProjectFooter = styled.div`
  text-align: start;
  margin-left: 0;

  @media screen and (max-width: 768px) {
    padding-left: 5%;
  }
`;
