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

export const AboutContainer = styled.div`
  padding-bottom: 80px;
`;
export const AboutWrapper = styled.div``;
export const AboutRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  } ;
`;
export const Column1 = styled.div``;
export const Column2 = styled.div``;
export const TextWrapper = styled.div`
  overflow: hidden;
  /* border: 1px solid red; */
  padding-top: 80px;
  width: 80%;
  display: flex;
  flex-direction: column;
  /* align-items: start; */
  margin-left: 70px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 20px;
  } ;
`;
export const Heading = styled.h2`
  text-align: start;
  font-size: 33px;
  line-height: 50px;
  font-family: "newyorkregular";

  @media screen and (max-width: 768px) {
    /* width: 90%; */
    font-size: 26px;
    text-align: start;
  } ;
`;
export const Subtitle = styled.p`
  line-height: 24px;
  font-size: 16px;
  margin-left: 0;
  width: 80%;
  /* border: 1px solid red; */
  margin-bottom: 10px;
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: start;
`;
export const ImgWrap = styled.div`
  padding-top: 80px;
  /* border: 1px solid red; */
`;
export const Img = styled.img`
  padding-right: 20px;
  width: 500px;

  @media screen and (max-width: 768px) {
    padding-right: 0;
    width: 100vw;
  } ;
`;
export const Link = styled.a``;
export const LogoWrap = styled.div`
  display: flex;

  /* flex-direction: row; */
  /* justify-content: space-evenly; */
`;
export const Logo1 = styled.img`
  /* border: 1px solid red; */
  padding: 20px;
  width: 100px;
  /* height: 100px; */
`;
export const Logo2 = styled.img`
  /* border: 1px solid red; */
  padding: 20px;
  width: 100px;
  /* height: 100px; */
`;
