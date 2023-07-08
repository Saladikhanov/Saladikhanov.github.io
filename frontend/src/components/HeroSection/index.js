import React from "react";
import { useState } from "react";
// import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowDownCircle,
  ArrowDown,
  Button,
} from "./HeroElements";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Fullstack developer</HeroH1>
        <HeroP>
          With passion and focus on creating{" "}
          <mark>user-friendly, intuitive websites</mark> that transform
          companies.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="expertise"
            smooth="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            TECHNOLOGIES I USE
            {hover ? <ArrowDown /> : <ArrowDownCircle />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
