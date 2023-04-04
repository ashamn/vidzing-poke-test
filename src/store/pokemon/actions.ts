import type * as types from "./types";
import * as actionTypes from "./actions.types";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";

/****************************** GET POKEMON LIST **********************************/
export const getPokemonList = (): types.GetPokemonList => ({
  type: actionTypes.GET_POKEMON_LIST,
});

export const getPokemonListSuccess = (
  payload: PokemonInterface[]
): types.GetPokemonListSuccess => ({
  type: actionTypes.GET_POKEMON_LIST_SUCCESS,
  payload,
});

export const getPokemonListFailure = (
  payload: string
): types.GetPokemonListFailure => ({
  type: actionTypes.GET_POKEMON_LIST_FAILURE,
  payload,
});

/****************************** SELECT POKEMON TEAM **********************************/

export const togglePokemonTeamMember = (
  payload: PokemonInterface
): types.TogglePokemonTeamMember => ({
  type: actionTypes.TOGGLE_POKEMON_TEAM_MEMBER,
  payload,
});

export const removePokemonTeamMember = (
  payload: PokemonInterface
): types.RemovePokemonTeamMember => ({
  type: actionTypes.REMOVE_POKEMON_TEAM_MEMBER,
  payload,
});

export const changePokemonTeamOrder = (
  payload: PokemonInterface[]
): types.ChangePokemonTeamOrder => ({
  type: actionTypes.CHANGE_POKEMON_TEAM_ORDER,
  payload,
});

export const clearPokemonTeam = (): types.ClearPokemonTeam => ({
  type: actionTypes.CLEAR_POKEMON_TEAM,
});

/****************************** SEARCH POKEMON **********************************/

export const searchPokemon = (payload: string): types.SearchPokemon => ({
  type: actionTypes.SEARCH_POKEMON,
  payload,
});
