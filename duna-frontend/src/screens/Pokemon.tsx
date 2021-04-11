import React from "react";
import axios, { AxiosResponse } from "axios";
import Wrapper from "../contents/Wrapper";
import PokeInfo from "../components/PokeInfo";
import { ChooseColorAccordingType } from "../services/Functions";

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
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, {
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

  return (
    <Wrapper>
      <PokeInfo
        id={pokemonId}
        name={pokeName}
        type1={pokemonType1}
        type2={pokemonType2}
        image={pokemonImage}
        height={pokemonHeight}
        weight={pokemonWeight}
        ability1={pokemonAbility1}
        ability2={pokemonAbility2}
        base_experience={pokemonBaseExperience}
        hp={pokemonHP}
        attack={pokemonAttack}
        defense={pokemonDefense}
        sp_attack={pokemonSpecialAttack}
        sp_defense={pokemonSpecialDefense}
        speed={pokemonSpeed}
        backgroundColor={ChooseColorAccordingType(pokemonType1)}
      />
    </Wrapper>
  );
}
