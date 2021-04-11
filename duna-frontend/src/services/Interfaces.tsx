export interface IContent {
  children: React.ReactElement;
}

export interface ITextContent {
  children: string;
}

export interface IPokeListResults {}

export interface IPokeList {
  results: Array<IPokeListResults>;
  id: number;
  name: string;
  url: string;
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
