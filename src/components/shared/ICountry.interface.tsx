export interface ICountry {
  name: IName;
  population: number;
  cca3: string;
  region: string;
  subregion: string;
  capital: string;
  flag: string;
  tld: string;
}
export interface IName {
  nativeName: string;
  official: string;
}
