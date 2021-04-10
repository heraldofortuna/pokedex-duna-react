import React from "react";
import axios, { AxiosResponse } from "axios";
import { IPokemon } from "../interfaces";
import styled from "styled-components";
import Wrapper from "../contents/Wrapper";

const StyledPokemon = styled.div`
  background-color: var(--blue);

  .pokemon__image {
    width: 150px;
    height: 150px;
  }
`;

export default function Pokemon() {
  const pokeName = window.location.href.split("/")[3];

  const [pokemonId, setPokemonId] = React.useState();
  const [pokemonType1, setPokemonType1] = React.useState();
  const [pokemonType2, setPokemonType2] = React.useState();
  const [pokemonImage, setPokemonImage] = React.useState();

  const [, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
    axios
      .get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: AxiosResponse) => {
        setPokemonId(response.data.id);
        setPokemonImage(response.data.sprites.front_default);
        setPokemonType1(response.data.types[0].type.name);
        response.data.types[1] !== undefined &&
          setPokemonType2(response.data.types[1].type.name);
        console.log(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.code === "ECONNABORTED"
            ? "A timeout has occurred"
            : ex.response.status === 404
            ? "Resource not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, [pokeName]);

  return (
    <StyledPokemon>
      <Wrapper>
        <div>
          <h2>{pokeName}</h2>
          <p>{pokemonType1}</p>
          <p>{pokemonType2}</p>
          <p>{pokemonId}</p>
        </div>
        <img className="pokemon__image" src={pokemonImage} alt={pokeName} />
      </Wrapper>
    </StyledPokemon>
  );
}
