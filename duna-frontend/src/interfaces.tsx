export interface IPokeListResults {}

export interface IPokeList {
  results: Array<IPokeListResults>;
  id: number;
  name: string;
  url: string;
}
