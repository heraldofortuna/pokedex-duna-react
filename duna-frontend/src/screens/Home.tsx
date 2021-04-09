import React from "react";
import styled from "styled-components";
import axios from "axios";

interface IPost {
  id: number;
  userId?: number;
  title: string;
  body: string;
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
        timeout: 4000,
      })
      .then((response) => {
        setPosts(response.data);
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
      {/* <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      {error && <p className="error">{error}</p>} */}
      {console.log(posts)}
    </StyledWrapper>
  );
}

export default Home;
