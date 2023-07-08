// import { NavLink } from 'react-router-dom'
import {
  ExpSection,
  ExpertiseWrapper,
  Header,
  ExpertiseItemsWrapper,
  ExpItem,
} from "./ExpertiseElements";
function Expertise() {
  return (
    <ExpSection className="expertise_wrapper _container">
      <ExpertiseWrapper>
        <Header>Programming Languages</Header>
        <ExpertiseItemsWrapper>
          <ExpItem>JavaScript</ExpItem>
          <ExpItem>TypeScript</ExpItem>
          <ExpItem>Java</ExpItem>
          <ExpItem>HTML</ExpItem>
          <ExpItem>CSS</ExpItem>
        </ExpertiseItemsWrapper>
      </ExpertiseWrapper>
      <ExpertiseWrapper>
        <Header>Frameworks and Libraries</Header>
        <ExpertiseItemsWrapper>
          <ExpItem>React JS</ExpItem>
          <ExpItem>Spring</ExpItem>
          <ExpItem>REDUX toolkit</ExpItem>
          <ExpItem>Material UI</ExpItem>
          <ExpItem>Bootstrap 5</ExpItem>
        </ExpertiseItemsWrapper>
      </ExpertiseWrapper>
      <ExpertiseWrapper>
        <Header>Databases and Cloud</Header>
        <ExpertiseItemsWrapper>
          <ExpItem>Mongo DB</ExpItem>
          <ExpItem>MySQL</ExpItem>
          <ExpItem>Google Firebase</ExpItem>
          <ExpItem>Cloud DB</ExpItem>
        </ExpertiseItemsWrapper>
      </ExpertiseWrapper>
    </ExpSection>
  );
}
export default Expertise;
