import styled from "styled-components";
import { IPokeType } from "../services/Interfaces";

const StyledPokeType = styled.div<IPokeType>`
  background-color: rgba(255, 255, 255, 0.25);
  border: 2px solid transparent;
  border-radius: 16px;
  padding: 4px 12px;
  cursor: pointer;
  transition: 0.2s all;

  :hover {
    background-color: ${(props) => props.backgroundColor};
    border: 2px solid var(--white);
  }

  & > h3 {
    color: var(--white);
  }
`;

export default function PokeType(props: IPokeType) {
  return (
    <StyledPokeType backgroundColor={props.backgroundColor}>
      <h3>{props.children}</h3>
    </StyledPokeType>
  );
}
