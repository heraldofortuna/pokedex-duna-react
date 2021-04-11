import styled from "styled-components";
import { ITextContent } from "../services/Interfaces";

const StyledPokeType = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  padding: 4px 12px;

  & > h3 {
    color: var(--white);
  }
`;

export default function PokeType(prop: ITextContent) {
  return (
    <StyledPokeType>
      <h3>{prop.children}</h3>
    </StyledPokeType>
  );
}
