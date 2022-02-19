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
} from "./ProjectPageElements";
import MacbookCss from "../../assets/MacbookCss";

const ProjectPage = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Working Holiday</HeroH1>
        <HeroP>
          Landing Page for visa consulting company. Branding, UX/Ui, testing.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="project"
            smooth="true"
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            GO TO LIVE SITE
            {hover ? <ArrowDown /> : <ArrowDownCircle />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
      <MacbookCss />
    </HeroContainer>
  );
};

export default ProjectPage;
