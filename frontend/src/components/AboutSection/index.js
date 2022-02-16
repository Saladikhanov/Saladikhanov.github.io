import React from "react";
import { useState } from "react";
import { ArrowRight, ArrowRightCircle } from "../AboutSection/AboutElements";
import { LinkButton as Button } from "../LinkButtonElement";
import {
  ArrowRight as Arrow,
  ArrowRightCircle as ArrowCircle,
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWrap,
  Img,
  Link,
  LogoWrap,
  Logo1,
  Logo2,
} from "./AboutElements";
import cvImg from "../../assets/about_blank.png";
import floxiesImg from "../../assets/floxies_blanc.png";
import floxiesLogo from "../../assets/floxies_logo.png";
import baligaLogo from "../../assets/baliga_logo.png";

const AboutSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <AboutContainer id="{id}">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <Heading>Hi, I am Daria!</Heading>
                <Heading>UI/UX Designer based in sunny Tel Aviv.</Heading>
                <Subtitle>
                  With <mark> 2 years of experience in Visual Design </mark> and
                  freelance projects, I am 100% focused on making great digital
                  products.
                </Subtitle>
                <Subtitle>
                  In my works,{" "}
                  <mark>I use simple and functional solutions.</mark> I pay
                  attention to designing the logic of the future design, the
                  brand identity of the company, and responsiveness.
                </Subtitle>
                <Subtitle>
                  My priority optimixing work to enhance user experience.
                  Graduated Art & Drama College in Graphic Design, I realized
                  designing user interfaces and challenging myself creating user
                  flows are my true passion. In 2020 I transitioned to UI / UX
                  world and couldn't be happier with that now.
                </Subtitle>
                <BtnWrapper>
                  <Button to="cv" onMouseEnter={onHover} onMouseLeave={onHover}>
                    VIEW MY CV
                    {hover ? <Arrow /> : <ArrowCircle />}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={cvImg} alt="about cv" />
              </ImgWrap>
            </Column2>
          </AboutRow>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <Heading>Proud member of Floxies.</Heading>
                <Subtitle>
                  Floxies is a young community for <mark>all women</mark> across
                  the globe with an interest in <mark>UX/UI Design</mark> and
                  Webflow Development. The idea is that of reducing the{" "}
                  <mark>gender gap</mark> in Technology where only 3% of women
                  consider this field as their primary career choice.
                </Subtitle>
                <Subtitle>
                  At Floxies we organise weekly meetings every Wednesday at 5pm
                  UK time.
                </Subtitle>
                <Subtitle>
                  Our virtual space allows us to hang out or learn something new
                  from one another.
                </Subtitle>
                <Subtitle>
                  Come and see it yourself at{" "}
                  <Link href="https://floxiescommunity.webflow.io">
                    floxiescommunity.webflow.io
                  </Link>
                </Subtitle>
                <LogoWrap>
                  <Logo1 src={floxiesLogo} />
                  <Logo2 src={baligaLogo} />
                </LogoWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={floxiesImg} alt="about cv" />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
