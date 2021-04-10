import React from "react";
import axios, { AxiosResponse } from "axios";
import { Link } from "react-router-dom";
import { IPokemon } from "../services/Interfaces";
import styled from "styled-components";
import Wrapper from "../contents/Wrapper";
import Container from "../contents/Container";
import PokeType from "../components/PokeType";
import Button from "../components/Button";
import { backgroundColorPokemon } from "../services/Functions";

export default function Pokemon() {
  const pokeName = window.location.href.split("/")[3];
  const [pokemonId, setPokemonId] = React.useState();
  const [pokemonType1, setPokemonType1] = React.useState();
  const [pokemonType2, setPokemonType2] = React.useState();
  const [pokemonImage, setPokemonImage] = React.useState();
  const [pokemonHeight, setPokemonHeight] = React.useState();
  const [pokemonWeight, setPokemonWeight] = React.useState();
  const [pokemonAbility1, setPokemonAbility1] = React.useState();
  const [pokemonAbility2, setPokemonAbility2] = React.useState();
  const [pokemonBaseExperience, setPokemonBaseExperience] = React.useState();
  const [pokemonHP, setPokemonHP] = React.useState();
  const [pokemonAttack, setPokemonAttack] = React.useState();
  const [pokemonDefense, setPokemonDefense] = React.useState();
  const [pokemonSpecialAttack, setPokemonSpecialAttack] = React.useState();
  const [pokemonSpecialDefense, setPokemonSpecialDefense] = React.useState();
  const [pokemonSpeed, setPokemonSpeed] = React.useState();

  const [, setLoading]: [
    boolean,
    (loading: boolean) => void
  ] = React.useState<boolean>(true);

  const [, setError]: [string, (error: string) => void] = React.useState("");

  React.useEffect(() => {
    axios
      .get<IPokemon>(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: AxiosResponse) => {
        setPokemonId(response.data.id);
        setPokemonImage(response.data.sprites.front_default);
        setPokemonType1(response.data.types[0].type.name);
        response.data.types[1] !== undefined &&
          setPokemonType2(response.data.types[1].type.name);
        setPokemonHeight(response.data.height);
        setPokemonWeight(response.data.weight);
        setPokemonAbility1(response.data.abilities[0].ability.name);
        setPokemonAbility2(response.data.abilities[1].ability.name);
        setPokemonBaseExperience(response.data.base_experience);
        setPokemonHP(response.data.stats[0].base_stat);
        setPokemonAttack(response.data.stats[1].base_stat);
        setPokemonDefense(response.data.stats[2].base_stat);
        setPokemonSpecialAttack(response.data.stats[3].base_stat);
        setPokemonSpecialDefense(response.data.stats[4].base_stat);
        setPokemonSpeed(response.data.stats[5].base_stat);
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
  }, [pokeName]);

  const StyledPokemon = styled.div`
    background-color: ${backgroundColorPokemon(pokemonType1)};

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

  return (
    <Wrapper>
      <StyledPokemon>
        <Container>
          <div className="pokemon__data--principal">
            <div>
              <h1 className="pokemon__name">
                <p className="pokemon__id">#{pokemonId}</p>
                {pokeName}
              </h1>
              <div className="pokemon__types">
                <PokeType>{pokemonType1}</PokeType>
                {pokemonType2 && <PokeType>{pokemonType2}</PokeType>}
              </div>
            </div>
            <img className="pokemon__image" src={pokemonImage} alt={pokeName} />
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
                    <p>{pokemonHeight} cm</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Weight</h4>
                  </td>
                  <td>
                    <p>{pokemonWeight}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Abilities</h4>
                  </td>
                  <td>
                    <div>
                      <p>
                        {pokemonAbility1}, {pokemonAbility2}
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
                    <p>{pokemonBaseExperience}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>HP:</h4>
                  </td>
                  <td>
                    <p>{pokemonHP}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Attack</h4>
                  </td>
                  <td>
                    <p>{pokemonAttack}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Defense</h4>
                  </td>
                  <td>
                    <p>{pokemonDefense}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sp. Attack</h4>
                  </td>
                  <td>
                    <p>{pokemonSpecialAttack}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Sp. Defense</h4>
                  </td>
                  <td>
                    <p>{pokemonSpecialDefense}</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Speed</h4>
                  </td>
                  <td>
                    <p>{pokemonSpeed}</p>
                  </td>
                </tr>
              </tbody>
            </table>
            <Link to={"/"} className="pokemon__button--back">
              <Button>Back to menu</Button>
            </Link>
          </Container>
        </section>
      </StyledPokemon>
    </Wrapper>
  );
}
