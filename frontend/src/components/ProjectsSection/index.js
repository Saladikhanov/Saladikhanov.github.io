// import { NavLink } from 'react-router-dom'
import { ProjectContainer } from "./ProjectsElements";
import ProjectCard from "./ProjectCard";
import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
} from "./Data";

function ProjectsSection() {
  return (
    <ProjectContainer>
      <ProjectCard {...projectObjOne} />
      <ProjectCard {...projectObjTwo} />
      <ProjectCard {...projectObjThree} />
      <ProjectCard {...projectObjFour} />
    </ProjectContainer>
  );
}
export default ProjectsSection;
