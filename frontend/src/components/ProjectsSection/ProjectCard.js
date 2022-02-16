import React from "react";
import { useState } from "react";
import {
  ArrowRightCircle,
  ArrowRight,
  ProjectBtnWrapper,
  ProjectWrapper,
  ProjectPic,
  ProjectName,
  ProjectDescription,
  ProjectFooter,
} from "./ProjectsElements";

import { LinkButton as Button } from "../LinkButtonElement";

const ProjectCard = (props) => {
  const { img, alt, projectName, projectDescription, projectFooter } = props;
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <ProjectWrapper>
      <ProjectPic src={img} alt={alt} className="project_pic" />
      <ProjectName>{projectName}</ProjectName>

      <ProjectDescription className="ProjectDescriptionroject_description_text">
        {projectDescription}
      </ProjectDescription>
      <ProjectFooter className="gallery_footer">{projectFooter}</ProjectFooter>
      <ProjectBtnWrapper>
        <Button to="projects" onMouseEnter={onHover} onMouseLeave={onHover}>
          VIEW DETAILS
          {hover ? <ArrowRight /> : <ArrowRightCircle />}
        </Button>
      </ProjectBtnWrapper>
    </ProjectWrapper>
  );
};

export default ProjectCard;
