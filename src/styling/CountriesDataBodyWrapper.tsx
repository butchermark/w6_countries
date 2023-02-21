import styled from "styled-components";

import { Wrapper } from "./Wrapper";

export const BodyWrapper = styled(Wrapper)`
  height: 100%;
  min-height: 100vh;
  overflow: auto;
  color: ${(props) =>
    props.theme === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
  background-color: ${(props) =>
    props.theme === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)"};
`;
