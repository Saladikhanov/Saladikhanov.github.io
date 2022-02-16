import "../App.css";
import { Link as LinkScroll } from "react-scroll";
import styled from "styled-components";
// import { NavLink } from 'react-router-dom'
export const DividerWrapper = styled.div`
  background: ${({ dark }) => (dark ? "#222" : "none")};
`;
function Divider(props) {
  const { id, date, section, name, dark } = props;
  console.log(dark);

  return (
    <DividerWrapper dark={dark}>
      <hr id={id} />
      <section className="desc_section">
        <div className="desc_section_item">{date}</div>
        <div className="desc_section_item">{section}</div>
        <div className="desc_section_item">{name}</div>
      </section>
    </DividerWrapper>
  );
}
export default Divider;
