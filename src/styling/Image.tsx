import styled from "styled-components";

export const Image = styled.img`
  src: ${(props) => props.src};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  loading: lazy;
  border: 5px solid black;
  border-top-right-radius: 7px;
  border-top-left-radius: 7px;
  object-fit: cover;
  @media (max-width: 600px) {
    align-self: center;
    width: 250px;
    height: 150px;
  }
`;
