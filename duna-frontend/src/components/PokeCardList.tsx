import styled from "styled-components";
import { IPokeCardList } from "../interfaces";
import PokeCard from "../components/PokeCard";

const StyledPokeCardList = styled.ul`
  background-color: red;
`;

export default function PokeCardList(prop: IPokeCardList) {
  return <StyledPokeCardList>{/* <PokeCard></PokeCard> */}</StyledPokeCardList>;
}
