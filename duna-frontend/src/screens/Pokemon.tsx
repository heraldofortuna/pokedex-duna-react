import styled from "styled-components";
import { IPokemon } from "../interfaces";

const StyledPokemon = styled.div`
  background-color: red;
`;

export default function Pokemon(prop: IPokemon) {
  const pokeName = window.location.href.split("/")[3];

  return (
    <StyledPokemon>
      <h2>{prop.name}</h2>
    </StyledPokemon>
  );
}
