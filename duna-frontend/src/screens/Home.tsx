import PokeCardList from "../components/PokeCardList";
import Wrapper from "../contents/Wrapper";

function Home() {
  return (
    <Wrapper>
      <h1>Pokedex</h1>
      <PokeCardList />
    </Wrapper>
  );
}

export default Home;
