import { create } from "zustand";

interface PokeStore {
  myPokemons: [];
  myPokemon: object;
  urlPokemons: [];
  pagePokemonsURL: (urls: []) => void;
  addPokemonsArray: (arrayPokemons: []) => void;
}

export const usePokeStore = create<PokeStore>()((set) => ({
  myPokemon: {},
  myPokemons: [],
  urlPokemons: [],
  pagePokemonsURL: (urls) => set({ urlPokemons: urls }),
  addPokemonsArray: (arrayPokemons) => set({ myPokemons: arrayPokemons }),
}));
