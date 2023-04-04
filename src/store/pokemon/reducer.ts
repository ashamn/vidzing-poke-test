import { POKE_INITIAL_STATE } from "@/store/pokemon/_inital_state";
import type { PokemonActions as PokeActions } from "@/store/pokemon/types";
import * as actionsTypes from "./actions.types";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";

export const pokemonReducer = (
  state = POKE_INITIAL_STATE,
  action: PokeActions
) => {
  switch (action.type) {
    case actionsTypes.GET_POKEMON_LIST_SUCCESS: {
      return {
        ...state,
        fetchStatus: "success",
        pokemonList: action.payload,
      };
    }
    case actionsTypes.GET_POKEMON_LIST_FAILURE: {
      return {
        ...state,
        fetchStatus: "fail",
        error: action.payload,
      };
    }
    case actionsTypes.REMOVE_POKEMON_TEAM_MEMBER: {
      const team = state.pokemonTeam.filter(
        (pokemn) => pokemn.id !== action.payload.id
      );
      return {
        ...state,
        pokemonTeam: team,
      };
    }
    case actionsTypes.TOGGLE_POKEMON_TEAM_MEMBER: {
      const isMember = !!state.pokemonTeam.find(
        (pokemn) => pokemn.id === action.payload.id
      );
      let team = state.pokemonTeam;
      if (isMember) {
        team = team.filter((pokemn) => pokemn.id !== action.payload.id);
      } else {
        // If pokemon team is full, pop the last member and add a new one
        if (team.length > 5) {
          team.pop();
          team = [action.payload, ...team];
        } else {
          team = [action.payload, ...team];
        }
      }
      return {
        ...state,
        pokemonTeam: team,
      };
    }
    case actionsTypes.CHANGE_POKEMON_TEAM_ORDER: {
      return {
        ...state,
        pokemonTeam: action.payload,
      };
    }
    case actionsTypes.CLEAR_POKEMON_TEAM: {
      return {
        ...state,
        pokemonTeam: [],
      };
    }
    case actionsTypes.SEARCH_POKEMON: {
      let searchList: PokemonInterface[] = [];
      if (action.payload !== "") {
        const pokemons = state.pokemonList.filter(
          (poke) =>
            poke.id.toString().includes(action.payload) ||
            poke.name.includes(action.payload)
        );
        if (pokemons) {
          searchList = pokemons;
        }
      }
      return {
        ...state,
        pokemonSearchList: searchList,
        pokemonSearchTerm: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
