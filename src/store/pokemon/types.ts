import type * as actionTypes from "./actions.types";
import { PokemonInterface } from "@/shared/interfaces/pokemon.interface";

/****************************** GET POKEMON LIST **********************************/
export type GetPokemonList = {
  type: typeof actionTypes.GET_POKEMON_LIST;
};

export type GetPokemonListSuccess = {
  type: typeof actionTypes.GET_POKEMON_LIST_SUCCESS;
  payload: PokemonInterface[];
};

export type GetPokemonListFailure = {
  type: typeof actionTypes.GET_POKEMON_LIST_FAILURE;
  payload: string;
};

/****************************** SELECT POKEMON TEAM **********************************/
export type TogglePokemonTeamMember = {
  type: typeof actionTypes.TOGGLE_POKEMON_TEAM_MEMBER;
  payload: PokemonInterface;
};

export type RemovePokemonTeamMember = {
  type: typeof actionTypes.REMOVE_POKEMON_TEAM_MEMBER;
  payload: PokemonInterface;
};

export type ChangePokemonTeamOrder = {
  type: typeof actionTypes.CHANGE_POKEMON_TEAM_ORDER;
  payload: PokemonInterface[];
};

export type ClearPokemonTeam = {
  type: typeof actionTypes.CLEAR_POKEMON_TEAM;
};

/****************************** SEARCH POKEMON **********************************/

export type SearchPokemon = {
  type: typeof actionTypes.SEARCH_POKEMON;
  payload: string;
};

export type PokemonActions =
  | GetPokemonList
  | GetPokemonListSuccess
  | GetPokemonListFailure
  | TogglePokemonTeamMember
  | RemovePokemonTeamMember
  | ChangePokemonTeamOrder
  | ClearPokemonTeam
  | SearchPokemon;
