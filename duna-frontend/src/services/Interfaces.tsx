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

export interface IPokeInfo {
  id?: any;
  name?: any;
  type1?: any;
  type2?: any;
  image?: any;
  height?: any;
  weight?: any;
  ability1?: any;
  ability2?: any;
  base_experience?: any;
  hp?: any;
  attack?: any;
  defense?: any;
  sp_attack?: any;
  sp_defense?: any;
  speed?: any;
  backgroundColor?: any;
}
