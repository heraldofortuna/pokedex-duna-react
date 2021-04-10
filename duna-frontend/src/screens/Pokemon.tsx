import React from "react";
import axios, { AxiosResponse } from "axios";
import styled from "styled-components";
import { IPokemon } from "../interfaces";

const StyledPokemon = styled.div`
  background-color: red;
`;

export default function Pokemon() {
  const pokeName = window.location.href.split("/")[3];

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
        setPokemonImage(response.data.sprites.front_default);
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
      <h2>{pokeName}</h2>
      {console.log(pokemonImage)}
      <img src={pokemonImage} alt={pokeName} />
    </StyledPokemon>
  );
}
