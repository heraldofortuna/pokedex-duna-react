import React from "react";
import axios, { AxiosResponse } from "axios";
import { IPokemon } from "../interfaces";
import styled from "styled-components";
import Wrapper from "../contents/Wrapper";
import Container from "../contents/Container";
import PokeType from "../components/PokeType";

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
        console.log(response.data);
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

  function backgroundColorPokemon(type: any) {
    let backgroundColor = "var(--blue)";
    switch (type) {
      case "grass": {
        backgroundColor = "var(--green)";
        break;
      }
      case "fire": {
        backgroundColor = "var(--red)";
        break;
      }
      default: {
        break;
      }
    }
    return backgroundColor;
  }

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
          gap: 4px;

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
      background-color: var(--red);
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
            color: var(--light-gray);
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
      <StyledPokemon>
        <Container>
          <div className="pokemon__data--principal">
            <div>
              <h1 className="pokemon__name">
                <p className="pokemon__id">{pokemonId}</p>
                {pokeName}
              </h1>
              <div className="pokemon__types">
                <PokeType>{pokemonType1}</PokeType>
                <PokeType>{pokemonType2}</PokeType>
              </div>
            </div>
            <img className="pokemon__image" src={pokemonImage} alt={pokeName} />
          </div>
        </Container>
        <section className="pokemon__data--stats">
          <Container>
            <h2>About</h2>
            <table className="pokemon__stats">
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
                  <p>{pokemonWeight} kg</p>
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
            </table>
            <h2>Pokemon stats</h2>
            <table className="pokemon__stats">
              <tr>
                <td>
                  <h4>Base experience</h4>
                </td>
                <td>
                  <p>{pokemonBaseExperience} pts</p>
                </td>
              </tr>
            </table>
          </Container>
        </section>
      </StyledPokemon>
    </Wrapper>
  );
}
