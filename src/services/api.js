import Axios from "axios";

export const baseURL = "https://pokeapi.co/api/v2/pokemon";

const api = Axios.create({
  baseURL,
});

export default api;
