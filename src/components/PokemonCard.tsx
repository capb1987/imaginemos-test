//next-ui

//funciones

import { Suspense, lazy, useEffect } from "react";

//funciones API
import { allPokeNames } from "../data/api";

//zustand
import { useShallow } from "zustand/react/shallow";

import { usePokeStore } from "../store/usePokeStore";

//componentes

import SpinnerCardPokemon from "./SpinnerCardPokemon";

const PokemonCardItem = lazy(() => import("./PokemonCardItem"));

//tipados

interface PokeDetail {
  url: string;
}

interface urlDetails {
  name: string;
  url: string;
}

/* Agregar tipados del JSON Poke */

/* tipado general */
export interface Poke {
  id: string;
  name: string;
  height: number;
  weight: number;
  abilities: Ability[];
  sprites: Sprites;
  types: Type[];
}

/* tipo de pokemon */

export interface Type {
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

/* tipado de la imagen */

interface Sprites {
  other: Other;
  front_default: string;
}

export interface Other {
  dream_world: OfficialArtwork;
  home: OfficialArtwork;
  "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
  front_default: string;
}

/* tipado habilidad */
export interface Ability {
  ability: Ability2;
  is_hidden: boolean;
  slot: number;
}

export interface Ability2 {
  name: string;
  url: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ArreglosPoke = any;

const PokemonCard = () => {
  const {
    myPokemons,
    myPokemon,
    urlPokemons,
    addPokemonsArray,
    pagePokemonsURL,
  } = usePokeStore(useShallow((state) => state));

  useEffect(() => {
    const fetchsNamesURL = async () => {
      const pokeNamesCards = allPokeNames;
      const allNamesPoke = await pokeNamesCards(30, 1302);
      const urlPokes = allNamesPoke.map((pokeUrl: urlDetails) => ({
        url: pokeUrl.url,
      }));
      pagePokemonsURL(urlPokes);
    };

    fetchsNamesURL();
  }, [pagePokemonsURL]);

  async function fetchPokemons(url: string) {
    try {
      const response = await fetch(`${url}`);
      const data = response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    const fetchDetailsPokemon = async (pokemon: []) => {
      try {
        const pokeDetails = pokemon.map(
          (pokeDetail: PokeDetail) => pokeDetail.url
        );
        const respuestasName: ArreglosPoke = await Promise.all(
          pokeDetails.map((poke) => fetchPokemons(poke))
        );
        addPokemonsArray(respuestasName);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetailsPokemon(urlPokemons);
  }, [addPokemonsArray, myPokemon, urlPokemons]);

  return (
    <>
      {myPokemons.map(
        ({ id, name, height, weight, abilities, sprites, types }: Poke) => (
          <Suspense key={id} fallback={<SpinnerCardPokemon />}>
            <PokemonCardItem
              id={id}
              name={name}
              height={height}
              weight={weight}
              abilities={abilities}
              sprites={sprites}
              types={types}
            />
          </Suspense>
        )
      )}
    </>
  );
};

export default PokemonCard;
