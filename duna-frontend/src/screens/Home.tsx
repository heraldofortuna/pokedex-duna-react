import React from "react";
import axios, { AxiosResponse } from "axios";
import { IPokeList } from "../interfaces";
import styled from "styled-components";
import PokeCardList from "../components/PokeCardList";

const defaultPokeList: IPokeList[] = [];

const StyledWrapper = styled.div`
  background-color: var(--white);
  width: 50%;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
`;

function Home() {
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
    <StyledWrapper>
      <h1>Pokedex</h1>
      <ul className="posts">
        {pokemons.map((pokemon) => (
          <h2>PokeCardList</h2>
          // <PokeCardList />
        ))}
      </ul>
      {error && <p className="error">{error}</p>}
    </StyledWrapper>
  );
}

export default Home;
