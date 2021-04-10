export interface IWrapper {
  children: any;
}

export interface IContainer {
  children: any;
}

export interface IButton {
  children: string;
}

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

export interface IPokemon {
  backgroundColor: string;
}

export interface IPokeType {
  children: any;
}
