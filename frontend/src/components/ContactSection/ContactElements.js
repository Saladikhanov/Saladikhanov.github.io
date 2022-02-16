import styled from "styled-components";
import { AiFillInstagram, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { BsArrowRightCircle, BsArrowRight } from "react-icons/bs";

export const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ButtonDiv = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  border: 1px solid red; */
`;
export const ArrowRightCircle = styled(BsArrowRightCircle)`
  margin: 10px;
  font-size: 30px;
`;

export const ArrowRight = styled(BsArrowRight)`
  margin: 10px;
  font-size: 30px;
`;

export const Instagram = styled(AiFillInstagram)`
  color: #e59aff;
  margin: 20px;
  font-size: 50px;
`;
export const Linkedin = styled(AiFillLinkedin)`
  color: #e59aff;
  margin: 20px;
  font-size: 50px;
`;
export const Phone = styled(AiFillPhone)`
  color: #e59aff;
  margin: 20px;
  font-size: 50px;
`;

export const ContactWrapper = styled.div`
  /* border: 1px solid red; */
  padding-right: 130px;

  @media screen and (max-width: 768px) {
    width: 99%;
  }
`;
export const Link = styled.a`
  display: inline-block;
  color: #fff;
  font-weight: normal;
  margin: 20px;

  &:hover {
    color: #fd994e;
  }
`;
export const Header = styled.h2`
  padding: 40px 50px 0 20px;
  /* border: 1px solid red; */
`;
export const City = styled.p``;
export const SocialWrapper = styled.div``;
export const SocialLink = styled.a``;
export const ContactFormWrapper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  width: 50%;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
