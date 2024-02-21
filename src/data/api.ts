import { urlPoke } from "../utils";

//traer todas las URLS
export const allPokeNames = async (offset: number, limit: number) => {
  const urlAllPokemons = `${urlPoke}/pokemon?offset=${offset}&limit=${limit}`;
  const respuesta = await fetch(urlAllPokemons);
  const { results } = await respuesta.json();

  return results;
};
