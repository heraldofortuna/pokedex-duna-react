import { Link } from "react-router-dom";
import { IPokeInfo } from "../services/Interfaces";

import styled from "styled-components";
import Container from "../contents/Container";
import Button from "../components/Button";
import PokeType from "../components/PokeType";

const StyledPokeInfo = styled.div`
  background-color: green;
`;

export default function PokeInfo(props: IPokeInfo) {
  return (
    <StyledPokeInfo>
      <Container>
        <div className="pokemon__data--principal">
          <div>
            <h1 className="pokemon__name">
              <p className="pokemon__id">#{props.id}</p>
              {props.name}
            </h1>
            <div className="pokemon__types">
              <PokeType>{props.type1}</PokeType>
              {props.type2 && <PokeType>{props.type2}</PokeType>}
            </div>
          </div>
          <img className="pokemon__image" src={props.image} alt={props.name} />
        </div>
      </Container>
      <section className="pokemon__data--stats">
        <Container>
          <h2>About</h2>
          <table className="pokemon__stats">
            <tbody>
              <tr>
                <td>
                  <h4>Height</h4>
                </td>
                <td>
                  <p>{props.height} cm</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Weight</h4>
                </td>
                <td>
                  <p>{props.weight}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Abilities</h4>
                </td>
                <td>
                  <div>
                    <p>
                      {props.ability1}, {props.ability2}
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Pokemon stats</h2>
          <table className="pokemon__stats">
            <tbody>
              <tr>
                <td>
                  <h4>Base experience</h4>
                </td>
                <td>
                  <p>{props.base_experience}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>HP:</h4>
                </td>
                <td>
                  <p>{props.hp}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Attack</h4>
                </td>
                <td>
                  <p>{props.attack}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Defense</h4>
                </td>
                <td>
                  <p>{props.defense}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Sp. Attack</h4>
                </td>
                <td>
                  <p>{props.sp_attack}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Sp. Defense</h4>
                </td>
                <td>
                  <p>{props.sp_defense}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Speed</h4>
                </td>
                <td>
                  <p>{props.speed}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <Link to={"/"} className="pokemon__button--back">
            <Button>Back to menu</Button>
          </Link>
        </Container>
      </section>
    </StyledPokeInfo>
  );
}
