import styled from "styled-components";

export const DropDownSelect = styled.select`
  margin-right: 50px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  height: 45px;
  width: 150px;
  color: ${(props) =>
    props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  background-color: ${(props) =>
    props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  @media (max-width: 577px) {
    margin: 10px 0 10px 5%;
  }
`;
