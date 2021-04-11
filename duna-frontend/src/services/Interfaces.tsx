export interface IContent {
  children: React.ReactNode;
}

export interface IPokeType {
  children: React.ReactNode;
  backgroundColor?: React.ReactText;
}

export interface IPokeListResults {}

export interface IPokeList {
  results: Array<IPokeListResults>;
  id: number;
  name: string;
  url: string;
}

export interface IPokeInfo {
  id?: React.ReactText;
  name?: string;
  type1?: React.ReactText;
  type2?: React.ReactText;
  image?: string;
  height?: React.ReactText;
  weight?: React.ReactText;
  ability1?: React.ReactText;
  ability2?: React.ReactText;
  base_experience?: React.ReactText;
  hp?: React.ReactText;
  attack?: React.ReactText;
  defense?: React.ReactText;
  sp_attack?: React.ReactText;
  sp_defense?: React.ReactText;
  speed?: React.ReactText;
  backgroundColor?: React.ReactText;
}
