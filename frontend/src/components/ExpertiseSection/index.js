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
        <Header>UX & Strategy</Header>
        <ExpertiseItemsWrapper>
          <ExpItem>User Research</ExpItem>
          <ExpItem>Competitive analysis</ExpItem>
          <ExpItem>User Personas</ExpItem>
          <ExpItem>User Journey Map</ExpItem>
          <ExpItem>User Flow</ExpItem>
        </ExpertiseItemsWrapper>
      </ExpertiseWrapper>
      <ExpertiseWrapper>
        <Header>UI & Design</Header>
        <ExpertiseItemsWrapper>
          <ExpItem>Wireframes</ExpItem>
          <ExpItem>Prototype</ExpItem>
          <ExpItem>Hi-Fi designs</ExpItem>
          <ExpItem>User Interface</ExpItem>
          <ExpItem>Design Research</ExpItem>
        </ExpertiseItemsWrapper>
      </ExpertiseWrapper>
      <ExpertiseWrapper>
        <Header>Technology</Header>
        <ExpertiseItemsWrapper>
          <ExpItem>Adobe Photoshop</ExpItem>
          <ExpItem>Adobe Illustraitor</ExpItem>
          <ExpItem>Adobe XD</ExpItem>
          <ExpItem>Figma</ExpItem>
        </ExpertiseItemsWrapper>
      </ExpertiseWrapper>
    </ExpSection>
  );
}
export default Expertise;
