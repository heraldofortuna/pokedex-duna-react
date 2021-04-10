export interface IPokeListResults {}

export interface IPokeList {
  results: Array<IPokeListResults>;
  id: number;
  name: string;
  url: string;
}

export interface IPokeCard {
  children: string;
}

export interface IPokemon {}
