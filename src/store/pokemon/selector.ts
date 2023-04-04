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
