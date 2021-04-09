import styled from "styled-components";

const StyledWrapper = styled.div`
  background-color: var(--white);
  width: 50%;
  min-height: 100vh;
  padding: 20px;
  margin: 0 auto;
`;

function Home() {
  return (
    <StyledWrapper>
      <h1>Pokedex</h1>
    </StyledWrapper>
  );
}

export default Home;
