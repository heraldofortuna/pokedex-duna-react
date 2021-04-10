import styled from "styled-components";
import { IPokeType } from "../services/Interfaces";

const StyledPokeType = styled.div`
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  padding: 4px 12px;

  & > h3 {
    color: var(--white);
  }
`;

export default function PokeType(prop: IPokeType) {
  return (
    <StyledPokeType>
      <h3>{prop.children}</h3>
    </StyledPokeType>
  );
}
