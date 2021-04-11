import { Link } from "react-router-dom";
import { IPokeInfo } from "../services/Interfaces";

import styled from "styled-components";
import Container from "../contents/Container";
import Button from "../components/Button";
import PokeType from "../components/PokeType";

const StyledPokeInfo = styled.div<IPokeInfo>`
  background-color: ${(props) => props.backgroundColor};

  .pokemon__data--principal {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .pokemon__name {
        color: var(--white);
        font-size: 36px;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;

        .pokemon__id {
          color: var(--white);
          font-size: 24px;
        }
      }

      .pokemon__types {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
      }
    }

    .pokemon__image {
      width: 150px;
      height: 150px;
    }
  }

  .pokemon__data--stats {
    background-color: var(--white);
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
    box-shadow: 2px -9px 14px -5px rgba(69, 69, 69, 0.4);
    -webkit-box-shadow: 2px -9px 14px -5px rgba(69, 69, 69, 0.4);
    -moz-box-shadow: 2px -9px 14px -5px rgba(69, 69, 69, 0.4);

    .pokemon__stats {
      tr {
        width: 75%;
      }

      td {
        width: 50%;

        & > h4 {
          color: var(--gray);
        }
      }
    }
  }

  .pokemon__button--back {
    text-align: center;
  }
`;

export default function PokeInfo(props: IPokeInfo) {
  return (
    <StyledPokeInfo backgroundColor={props.backgroundColor}>
      {console.log(props.backgroundColor)}
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
