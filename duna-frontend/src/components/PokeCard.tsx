import { IContent } from "../services/Interfaces";

import styled from "styled-components";
import PokeballImage from "../assets/pokeball.svg";

const StyledPokeCard = styled.li`
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

  .pokecard__image {
    width: 20px;
    height: 20px;
  }
`;

export default function PokeCard(prop: IContent) {
  return (
    <StyledPokeCard>
      <p>{prop.children}</p>
      <img className="pokecard__image" src={PokeballImage} alt="Pokeball" />
    </StyledPokeCard>
  );
}
