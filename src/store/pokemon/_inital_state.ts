import { PokemonStateInterface } from "@/shared/interfaces/pokemon.interface";

export const POKE_INITIAL_STATE: PokemonStateInterface = {
  pokemonList: [],
  pokemonTeam: [],
  pokemonSearchList: [],
  pokemonSearchTerm: "",
  fetchStatus: "idle",
  error: "",
};
