import styled from "styled-components";
import { IContent } from "../services/Interfaces";

const StyledPokeType = styled.div<IContent>`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  padding: 4px 12px;
  transition: 0.4s all;

  :hover {
    background-color: ;
  }

  & > h3 {
    color: var(--white);
  }
`;

export default function PokeType(prop: IContent) {
  return (
    <StyledPokeType>
      <h3>{prop.children}</h3>
    </StyledPokeType>
  );
}
