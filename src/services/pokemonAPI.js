import api from "./api";

export default class PokemonApi {
  static getPokemons = async () => {
    const response = await api.get("?limit=250&offset=0");
    return response.data;
  };

  static getPokemonInformation = async (pokemon) => {
    const reponse = await api.get(`/${pokemon}`);
    return reponse.data;
  };
}
