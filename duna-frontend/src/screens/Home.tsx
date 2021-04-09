import React from "react";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";

interface IResults {
  id: number;
  name: string;
  url: string;
}

interface IPost {
  results: Array<IResults>;
}

const defaultPosts: IPost[] = [];

const StyledWrapper = styled.div`
  background-color: var(--white);
  width: 50%;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
`;

function Home() {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
    defaultPosts
  );

  const [loading, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [error, setError]: [string, (error: string) => void] = React.useState(
    ""
  );

  React.useEffect(() => {
    axios
      .get<IPost[]>("https://pokeapi.co/api/v2/pokemon/", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: AxiosResponse) => {
        setPosts(response.data.results);
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
      {console.log(posts[0])}
      {error && <p className="error">{error}</p>}
    </StyledWrapper>
  );
}

export default Home;
