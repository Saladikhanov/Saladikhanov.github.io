import styled from "styled-components";
export const ExpSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 110px;
  /* border: 1px solid red; */
  align-items: start;
  /* justify-content: start; */

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;
export const ExpertiseWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: start; */
  /* border: 1px solid red; */
  max-width: 100vw;
  margin: 0px auto;
`;
export const Header = styled.h2`
  /* border: 1px solid red; */
  font-size: 33px;
  font-family: "newyorkregular";
  padding: 80px 0 20px 0;
`;
export const ExpertiseItemsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  /* border: 1px solid red; */
`;
export const ExpItem = styled.li`
  line-height: 35px;
  font-size: 16px;
  font-weight: normal;
`;
