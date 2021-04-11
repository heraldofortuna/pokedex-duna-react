import styled from "styled-components";
import { IContent } from "../services/Interfaces";

const StyledButton = styled.button`
  background-color: var(--black);
  width: fit-content;
  color: var(--white);
  font-size: 16px;
  border: none;
  border-radius: 16px;
  padding: 8px 16px;
  margin: 0 auto;
  cursor: pointer;
  box-shadow: -1px 9px 7px -6px rgba(57, 57, 57, 0.8);
  -webkit-box-shadow: -1px 9px 7px -6px rgba(57, 57, 57, 0.8);
  -moz-box-shadow: -1px 9px 7px -6px rgba(57, 57, 57, 0.8);
  transition: 0.4s all;

  :hover {
    opacity: 0.85;
  }

  :focus {
    outline: none;
  }
`;

export default function Button(prop: IContent) {
  return <StyledButton>{prop.children}</StyledButton>;
}
