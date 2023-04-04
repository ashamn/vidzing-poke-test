import { POKE_INITIAL_STATE } from "@/store/pokemon/_inital_state";
import type { PokemonActions as PokeActions } from "@/store/pokemon/types";
import * as actionsTypes from "./actions.types";

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
      // const team = state.pokemonTeam;
      // const currentPos = team.findIndex(
      //   (poke) => poke.id === action.payload.pokemon.id
      // );
      // const removedPokemon = team.splice(currentPos, 1)[0];
      // team.splice(action.payload.position, 0, removedPokemon);
      return {
        ...state,
        pokemonTeam: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
