import PokeCardList from "../components/PokeCardList";
import Wrapper from "../contents/Wrapper";
import Container from "../contents/Container";

function Home() {
  return (
    <Wrapper>
      <Container>
        <h1>Pokedex</h1>
        <PokeCardList />
      </Container>
    </Wrapper>
  );
}

export default Home;
