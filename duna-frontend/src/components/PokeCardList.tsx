import React from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { IPokeList } from "../services/Interfaces";
import styled from "styled-components";
import PokeCard from "./PokeCard";

const StyledPokeCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const defaultPokeList: IPokeList[] = [];

export default function PokeCardList() {
  const [pokemons, setPokemons]: [
    IPokeList[],
    (pokemons: IPokeList[]) => void
  ] = React.useState(defaultPokeList);

  const [, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ""
  );

  React.useEffect(() => {
    axios
      .get<IPokeList[]>("https://pokeapi.co/api/v2/pokemon/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: AxiosResponse) => {
        setPokemons(response.data.results);
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
  }, []);

  return (
    <StyledPokeCardList>
      {pokemons.map((pokemon) => (
        <Link key={pokemon.name} to={`/${pokemon.name}`}>
          <PokeCard>{pokemon.name}</PokeCard>
        </Link>
      ))}
      {error && <p className="error">{error}</p>}
    </StyledPokeCardList>
  );
}
