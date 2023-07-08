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

const AboutSection = () => {
  const [hover, setHover] = useState(false);

  const handleDownloadCv = () => {
    fetch("CV_Arsen_S_Fullstack.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV_Arsen_S_Fullstack.pdf";
        alink.click();
      });
    });
  };

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
                <Heading>Hi, I am Arsen!</Heading>
                <Heading>Fullstack developer based in Israel.</Heading>
                <Subtitle>
                  Hello! I'm Arsen Saladikhanov,
                  <mark> experienced full-stack developer with a focus on frontend development. <br/></mark>
                  I working with JavaScript, TypeScript, Java, React, Spring
                  Framework, and more.
                </Subtitle>
                <Subtitle>
                  If you have any questions or would like to learn more about my
                  work, feel free to contact me via phone, email, or LinkedIn.
                </Subtitle>

                <BtnWrapper>
                  <Button
                    to="/"
                    onClick={handleDownloadCv}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                  >
                    DOWNLOAD MY CV
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
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
