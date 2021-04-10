import React from "react";
import axios, { AxiosResponse } from "axios";
import { IPokeList } from "../interfaces";
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
    (posts: IPokeList[]) => void
  ] = React.useState(defaultPokeList);

  const [loading, setLoading]: [
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
        <PokeCard>{pokemon.name}</PokeCard>
      ))}
      {error && <p className="error">{error}</p>}
    </StyledPokeCardList>
  );
}
