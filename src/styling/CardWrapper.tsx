import styled from "styled-components";

export const CardWrapper = styled.div`
  border-radius: 7px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.25);
  width: 260px;
  height: 350px;
  background-color: ${(props: { theme: string }) =>
    props.theme === "dark" ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)"};
  h3 {
    margin-left: 30px;
  }
  p {
    margin: 5px 30px;
  }
`;
