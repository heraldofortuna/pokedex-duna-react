import styled from "styled-components";
import { IPokeCard } from "../interfaces";

const StyledPokeCard = styled.li`
  background-color: blue;
`;

export default function PokeCard(prop: IPokeCard) {
  return (
    <StyledPokeCard>
      <h2>{prop.children}</h2>
    </StyledPokeCard>
  );
}
