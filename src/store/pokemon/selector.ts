import { createSelector } from "reselect";
import type { RootState } from "@/store/store";
import { PokemonStateInterface } from "@/shared/interfaces/pokemon.interface";

const pokeState = (state: RootState) => state.pokemon;

export const selectPokeList = createSelector(
  [pokeState],
  (pokeState: PokemonStateInterface) => pokeState.pokemonList
);

export const getPokeTeam = createSelector(
  [pokeState],
  (pokeState: PokemonStateInterface) => pokeState.pokemonTeam
);

export const getSearchList = createSelector(
  [pokeState],
  (pokeState: PokemonStateInterface) => pokeState.pokemonSearchList
);

export const getSearchTerm = createSelector(
  [pokeState],
  (pokeState: PokemonStateInterface) => pokeState.pokemonSearchTerm
);
