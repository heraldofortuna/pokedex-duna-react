import styled from "styled-components";
import { IPokeCard } from "../interfaces";

const StyledPokeCard = styled.li`
  background-color: var(--white);
  border: 2px solid var(--black);
  box-shadow: -2px 2px 0px var(--gray);
  padding: 8px;
  cursor: pointer;
  transition: 0.4s all;

  :hover {
    transform: translateX(8px);
  }

  & > p {
    text-transform: capitalize;
  }
`;

export default function PokeCard(prop: IPokeCard) {
  return (
    <StyledPokeCard>
      <p>{prop.children}</p>
    </StyledPokeCard>
  );
}
